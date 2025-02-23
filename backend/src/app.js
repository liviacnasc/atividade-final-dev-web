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
<<<<<<< HEAD

=======
    
>>>>>>> 6f3146c0aa719f061be8528352997b35dd52cb0f
    const hostname = "localhost";
    const port = "3000";

    const app = express();
    const mongoConnection = await Mongo.connect({mongoConnectionString: process.env.MONGO_CONNECTION_STRING, mongoDbName: process.env.MONGO_DATABASE_NAME});
    console.log(mongoConnection);
    
    app.use(express.json());
    app.use(cors({
        origin: [""],
        methods: ["POST", "GET"],
        credentials: true})
    );

    app.get("/", (req, res) => {
        res.send({
            success: true,
            statusCode: 200
        });
    });
    
    app.use('/auth', authRouter);
    app.use('/user', usersRouter);
    app.use('/alunos', alunosRouter);
    app.use('/turmas', turmasRouter);

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`);
    });

}

main();
