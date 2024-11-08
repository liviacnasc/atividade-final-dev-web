import UsersDataAccess from "../dataAccess/users.js";
import { erroServidor, successo } from '../helpers/httpResponse.js';

export default class UsersController{
    constructor() {
        this.dataAccess = new UsersDataAccess();
    }

    async getUsers() {
        try {
            const users = await this.dataAccess.getUsers();

            return successo(users);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async deleteUser(userId) {
        try {
            const result = await this.dataAccess.deleteUser(userId);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }

    async updateUser(userId, userData) {
        try {
            const result = await this.dataAccess.updateUser(userId, userData);

            return successo(result);
        } catch (error) {
            return erroServidor(error);
        }
    }
}