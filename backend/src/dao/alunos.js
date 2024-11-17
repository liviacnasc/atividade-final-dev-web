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
                    $unwind: { 
                        path: "$turma",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $lookup:{
                        from: 'turmas',
                        localField: 'turma.turmaId',
                        foreignField: '_id',
                        as: 'turma.turmaDetalhes'
                    }
                },
                {
                    $group: {
                        _id: '$_id',
                        nome: { $first: '$nome'},
                        sobrenome: { $first: '$sobrenome'},
                        cpf: { $first: '$cpf'},
                        data_de_nascimento: { $first: '$data_de_nascimento'},
                        data_de_matricula: { $first: '$data_de_matricula'},
                        situacao: { $first: '$situacao'},
                        notas: { $first: '$notas'},
                        presencas: { $first: '$presencas'},
                        turma: { $push: '$turma.turmaDetalhes'},
                    }
                },
                {
                    $sort: {
                        nome: 1
                    }
                }
            ]
        )
        .toArray()

        return result;
    }
    
    async getAlunoById(alunoId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOne({_id: new ObjectId(alunoId)}, { $project: { _id: 1 }})

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

