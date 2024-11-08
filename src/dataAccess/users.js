import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from "crypto";

const collectionName = "usuarios";

export default class UsersDataAccess {
    async getUsers() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return result;
    }
    
    async deleteUser() {

    }
}

