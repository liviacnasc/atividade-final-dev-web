import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";
import authRouter from "./auth/auth.js";
import usersRouter from "./routes/users.js";
import alunosRouter from "./routes/alunos.js";
import turmasRouter from "./routes/turmas.js";

config();

async function main() { 

    const app = express();
    const mongoConnection = await Mongo.connect({mongoConnectionString: process.env.MONGO_CONNECTION_STRING, mongoDbName: process.env.MONGO_DATABASE_NAME});
    console.log(mongoConnection);
    
    app.use(express.json());
    app.use();

    app.use("/", (req, res) => {
        res.send({
            success: true,
            statusCode: 200
        });
    });
    
    app.use('/auth', authRouter);
    app.use('/user', usersRouter);
    app.use('/alunos', alunosRouter);
    app.use('/turmas', turmasRouter);

}

main();
