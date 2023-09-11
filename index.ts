import cors from "cors";
import express, { Express } from "express";
import { deleteAll, getCountedWords, insertWord } from "./db/word-request";
require("./db/db-config")
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/get-words", getCountedWords);
app.post("/insert-word", insertWord);
app.delete("/remove-word", deleteAll);

app.listen(5101, () => {
    console.log(`[⚡] Server is listening on port: 5101!`)
})