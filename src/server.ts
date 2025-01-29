import express, {Request, Response } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

const PORT = 3000;

app.get('/teste', (req: Request, res: Response) => {
    res.json({message: 'Olá pobres'})
});

app.listen(PORT, () =>{
    console.log("Server rodando!")
})
