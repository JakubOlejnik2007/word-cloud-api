import Word from "./word-model";
import { Request, Response } from "express";

interface IWord {
    content: string
}

export const insertWord = async (req: Request, res: Response) => {
    try {
        if(!req.body.content) throw new Error("No content");
        const word = {content: req.body.content};
        await Word.create(word);
        res.send(200)
    } catch (error) {
        res.sendStatus(503);
    }
}

export const getCountedWords = async (req: Request, res: Response) => {
    try {
        const aggregation = [
            {
              $group: {
                _id: '$content',
                count: { $sum: 1 },
              },
            },
          ];
      
          const result = await Word.aggregate(aggregation);
          res.send(result);
    } catch (error) {
        res.sendStatus(503);
    }
}

export const deleteAll = async (req: Request, res: Response) => {
    try {
        await Word.deleteMany({});
        res.send(200)
    } catch (error) {
        res.sendStatus(503);
    }
}