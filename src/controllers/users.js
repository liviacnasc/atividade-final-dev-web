import UsersDataAccess from "../dataAccess/users.js";
import { erroServidor, successo } from '../helpers/httpResponse.js';

export default class UsersController{
    constructor() {
        this.dataAccess = new UsersDataAccess();
    }

    async getUsers() {
        try {
            const users = this.dataAccess.getUsers();

            return successo(users);
        } catch (error) {
            return erroServidor(error);
        }
    }
}