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
                $unwind: { path: "$alunosTurma" }
            },
            {
                $lookup: {
                    from: 'alunos',
                    localField: 'alunosTurma.alunoId',
                    foreignField: '_id',
                    as: 'alunosTurma.dadosAluno'
                }
            },
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
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({_id: new ObjectId(turmaId)})

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

