import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";

config();

async function main() {
    const hostname = "localhost";
    const port = "3000";

    const app = express();
    const mongoConnection = await Mongo.connect({mongoConnectionString: process.env.MONGO_CONNECTION_STRING, mongoDbName: process.env.MONGO_DATABASE_NAME});

    app.use(express.json());
    app.use(cors());

    app.get("/", (req, res) => {
        res.send({
            success: true,
            statusCode: 200
        });
    });

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`);
    });
}

main();
