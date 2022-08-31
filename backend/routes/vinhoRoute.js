import express from 'express'
import Vinho from '../models/vinhoModel'
import { getToken } from '../util'

const router = express.Router();



router.post("/", async (req, res) => {
    const vinho = new Vinho({
        name: req.body.name,
        image: req.body.emimageil,
        countInStock: req.body.countInStock,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        numReviews: req.body.numReviews,

    });
    const newVinho = await vinho.save();
    if (newVinho) {
        return res.status(201).send({ message: 'Novo Vinho Criado', data: newVinho });
    }
    res.status(500).send({ message: "Erro ao criar o Vinho!" })

})


export default router;