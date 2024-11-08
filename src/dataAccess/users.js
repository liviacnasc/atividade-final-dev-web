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
    
    async deleteUser(userId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({_id: new ObjectId(userId)})

        return result;
    }

    async updateUser(userId, userData) {
        if(userData.password) {
            const salt = crypto.randomBytes(16);

            crypto.pbkdf2(userData.password, salt, 310000, 16, "sha256", async (err, hashedPassword) => {
                if(err) {
                    throw new Error("Erro na criptografia da senha.");
                }

                userData = {...userData, password: hashedPassword, salt}

                const result = await Mongo.db
                .collection(collectionName)
                .findOneAndUpdate(
                    { _id: userId },
                    { $set: userData}
                );

                return result;
            })
        }

        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            {_id: new ObjectId(userId)},
            {$set: userData}
        );

        return result;
    }

}

