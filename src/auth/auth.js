import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import crypto from "crypto";
import { Mongo } from "../database/mongo.js";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

const collectionName = 'usuarios';

passport.use(new LocalStrategy({ usernameField: 'email'}, async (email, password, callback) => {
    const user = await Mongo.db.collection(collectionName).findOne({email: email});

    if(!user){
        return callback(null, false);
    }

    const saltBuffer = user.salt.buffer;

    crypto.pbkdf2(password, saltBuffer, 310000, 16, "sha256", (err, hashedPassword) => {
        if(err){
            return callback(null, false);
        }

        const userPasswordBuffer = Buffer.from(user.password.buffer)

        if(!crypto.timingSafeEqual(userPasswordBuffer, hashedPassword)){
            return callback(null, false);
        }

        const {password, salt, ...rest} = user;

        return callback(null, rest)
    })
}))

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
    const checkUser = await Mongo.db.collection(collectionName).findOne({ email: req.body.email});

    if(checkUser){
        return res.status(500).send({
            success: false,
            statusCode: 500,
            body: {
                text: "Usuário já existe."
            }
        })
    }

    const salt = crypto.randomBytes(16);

    crypto.pbkdf2(req.body.password, salt, 31000, 16, "sha256", async (err, hashedPassword) => {
        if(err){
            return res.status(500).send({
                success: false,
                statusCode: 500,
                body: {
                    text: "Erro na criptografia da senha.",
                    err: err
                }
            })
        }

        const result = await Mongo.db
        .collection(collectionName)
        .insertOne({
            email: req.body.email,
            password: hashedPassword,
            salt
        })

        if(result.insertedId){
            const user = await Mongo.db.collection(collectionName).findOne({ _id: new ObjectId(result.insertedId)})

            const token = jwt.sign(user, 'secret')

            return res.send({
                success: true,
                statusCode: 200,
                body: {
                    text: "Usuário registrado com sucesso.",
                    token,
                    user,
                    logged: true
                }
            })
        }
    })
})

export default authRouter;