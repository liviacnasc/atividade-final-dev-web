import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import crypto from "crypto";
import { Mongo } from "../database/mongo";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

const collectionName = 'users';

passport.use(new LocalStrategy({ usernameField: 'email'}, async (email, password, callback) => {
    const user = await Mongo.db
    .collection(collectionName)
    .findOne({email: email})

    if(!user){
        return callback(null, false);
    }

    const saltBuffer = user.salt.saltBuffer;

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