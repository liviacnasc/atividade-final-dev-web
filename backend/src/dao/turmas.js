import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = "turmas";

// 'dao' significa data access object

export default class TurmasDAO {
    async getTurmas() {
        const result = await Mongo.db
        .collection(collectionName)
        .aggregate([
            {
                $lookup: {
                    from: 'alunosTurmas',
                    localField: '_id',
                    foreignField: 'turmaId',
                    as: 'alunosTurma'
                }
            },
            {
                $unwind: { 
                    path: "$alunosTurma",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'alunos',
                    localField: 'alunosTurma.alunoId',
                    foreignField: '_id',
                    as: 'alunosTurma.dadosAluno'
                }
            },
            {
                $group: {
                    _id: '$_id',
                    nome_turma: { $first: '$nome_turma'},
                    serie: { $first: '$serie'},
                    turno: { $first: '$turno'},
                    ano_letivo: { $first: '$ano_letivo'},
                    professor_responsavel: { $first: '$professor_responsavel'},
                    sala: { $first: '$sala'},
                    alunos: { $push: '$alunosTurma.dadosAluno' },
                }
            },
            {
                $sort: {
                    nome_turma: 1
                }
            }
        ])
        .toArray()

        return result;
    }
    
    async addTurmas(turmaData) {
        const { alunos, ...turmaDataRest } = turmaData;

        turmaDataRest.criadoEm = new Date();

        const novaTurma = await Mongo.db
        .collection(collectionName)
        .insertOne(turmaDataRest);

        if(!novaTurma.insertedId) {
            throw new Error("Não foi possível adicionar a turma.")
        }

        alunos.map((aluno) => {
            aluno.alunoId = new ObjectId(aluno.alunoId);
            aluno.turmaId = new ObjectId(novaTurma.insertedId)
        })

        const result = await Mongo.db
        .collection('alunosTurmas')
        .insertMany(alunos);
        
        // const result = await Mongo.db
        // .collection('alunos')
        // .updateMany(
        //     { _id: {$in: ids}},
        //     { $set: {turmaId: novaTurma.insertedId}}
        // );

        console.log(result);

        if(!result.insertedIds) {
            throw new Error ("Não foi possível adicionar o(s) alunos(s).");
        }

        return result;
    }

    async deleteTurma(turmaId) {
        const alunosParaDeletar = await Mongo.db
        .collection('alunosTurmas')
        .deleteMany(
            {turmaId: new ObjectId(turmaId)}
        )

        const turmaParaDeletar = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({_id: new ObjectId(turmaId)})

        const result = {
            alunosParaDeletar,
            turmaParaDeletar
        }

        return result;
    }

    async updateTurmas(turmaId, turmaData) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            {_id: new ObjectId(turmaId)},
            {$set: turmaData}
        );

        return result;
    }

}

