import express, {Request, Response } from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/teste', (req: Request, res: Response) => {
    res.json({message: 'Olá pobres'})
});

app.listen(PORT, () =>{
    console.log("Server rodando!")
})
