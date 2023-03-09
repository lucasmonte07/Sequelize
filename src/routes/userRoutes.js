import { Router } from 'express';
import { User } from '../modells/userModells.js';

const routerUser = Router();

routerUser.get("/", async (req, res) => {
    try{
        const users = await User.findAll()
        res.send({mensaje: users})
    } catch(error){
        res.send(error)
    }
})

export default routerUser