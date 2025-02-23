import express from "express";
import cors from "cors";
import { Mongo } from "./src/database/mongo.js";
import { config } from "dotenv";
import authRouter from "./src/auth/auth.js";
import usersRouter from "./src/routes/users.js";
import alunosRouter from "./src/routes/alunos.js";
import turmasRouter from "./src/routes/turmas.js";

config();

async function main() { 
    const hostname = "localhost";
    const port = 3000;

    const app = express();
    const mongoConnection = await Mongo.connect({mongoConnectionString: process.env.MONGO_CONNECTION_STRING, mongoDbName: process.env.MONGO_DATABASE_NAME});
    console.log(mongoConnection);
    
    app.use(express.json());
    app.use(cors());

    app.get("/", (req, res) => {
        res.send({
            success: true,
            statusCode: 200
        }
        );
    });
    
    app.use('/auth', authRouter);
    app.use('/user', usersRouter);
    app.use('/alunos', alunosRouter);
    app.use('/turmas', turmasRouter);

    app.listen(port, function(err){
        if (err) console.log("Error in server setup")
        console.log(`http://${hostname}:${port}`);
    })
}

main();
