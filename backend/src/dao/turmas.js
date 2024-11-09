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
                    from: 'alunos',
                    localField: '_id',
                    foreignField: 'turmaId',
                    as: 'alunos'
                },
            },
            {
                $project: {
                    'alunos.data_de_nascimento': 0,
                    'alunos.data_de_matricula': 0,
                    'alunos.situacao': 0,
                    'alunos.notas': 0,
                    'alunos.historico_disciplinar': 0,
                    'alunos.necessidades_especiais': 0,
                    'alunos.turmaId': 0,
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

        const ids = [];

        alunos.map((aluno) => {
            aluno.alunoId = new ObjectId(aluno.alunoId);
        })

        alunos.forEach(element => {
            ids.push(element.alunoId);
        });

        const result = await Mongo.db
        .collection('alunos')
        .updateMany(
            { _id: {$in: ids}},
            { $set: {turmaId: novaTurma.insertedId}}
        );

        console.log(result);

        if(!result) {
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

