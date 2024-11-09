
import TurmasDAO from '../dao/turmas.js';
import { erroServidor, successo } from '../helpers/httpResponse.js';

export default class TurmasController{
    constructor() {
        this.dataAccess = new TurmasDAO();
    }

    async getTurmas() {
        try {
            const turmas = await this.dataAccess.getTurmas();

            return successo(turmas);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async deleteTurma(turmaId) {
        try {
            const result = await this.dataAccess.deleteTurma(turmaId);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async addTurma(turmaData) {
        try {
            const result = await this.dataAccess.addTurmas(turmaData);

            return successo(result);
            
        } catch (error) {
            return erroServidor(error);
        }
    }

    async updateTurma(turmaId, turmaData) {
        try {
            const result = await this.dataAccess.updateTurmas(turmaId, turmaData);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }
}