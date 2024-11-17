import AlunosDAO from '../dao/alunos.js';
import { erroServidor, successo } from '../helpers/httpResponse.js';

export default class AlunosController{
    constructor() {
        this.dataAccess = new AlunosDAO();
    }

    async getAlunos() {
        try {
            const result = await this.dataAccess.getAlunos();

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async getAlunoById(alunoId) {
        try {
            const result = await this.dataAccess.getAlunoById(alunoId);

            return successo(result);
        } catch (error) {
            return erroServidor(error)
        }
    }

    async deleteAluno(alunoId) {
        try {
            const result = await this.dataAccess.deleteAluno(alunoId);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async addAluno(alunoData) {
        try {
            const result = await this.dataAccess.addAluno(alunoData);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async updateAluno(alunoId, alunoData) {
        try {
            const result = await this.dataAccess.updateAluno(alunoId, alunoData);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }
}