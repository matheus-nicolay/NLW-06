import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

//routes
app.use(router);

app.listen(8090, () =>
    console.log("Server is running")
);