import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = "alunos";

// 'dao' significa data access object

export default class AlunosDAO {
    async getAlunos() {
        const result = await Mongo.db
        .collection(collectionName)
        .aggregate(
            [
                {
                    $lookup:{
                        from: 'alunosTurmas',
                        localField: '_id',
                        foreignField: 'alunoId',
                        as: 'turma'
                    }
                },
                {
                    $project: {
                        'turma.alunoId': 0,
                    }
                },
                {
                    $unwind: { path: '$turma'}
                },
                {
                    $lookup:{
                        from: 'turmas',
                        localField: 'turma.turmaId',
                        foreignField: '_id',
                        as: 'turmaDetalhes'
                    }
                }
            ]
        )
        .toArray()

        return result;
    }
    
    async addAluno(alunoData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(alunoData)

        return result;
    }

    async deleteAluno(alunoId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({_id: new ObjectId(alunoId)})

        return result;
    }

    async updateAluno(alunoId, alunoData) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            {_id: new ObjectId(alunoId)},
            {$set: alunoData}
        );

        return result;
    }

}

