import express from 'express'
import User from '../models/userModel'
import { getToken } from '../util'

const router = express.Router();

router.post("/signin", async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            email: signinUser.email,
            name: signinUser.name,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    } else (
        res.status(401).send({ msg: "Invalidd email or password" })
    )
})

router.post("/register", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else (
        res.status(401).send({ msg: "Dados inválidos!" })
    )
})

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Nuno',
            email: 'nuno_fernandes18@hotmail.com',
            password: '123456',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message })
    }
});

export default router;