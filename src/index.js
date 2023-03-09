import express from 'express';
import routerUser from './routes/userRoutes.js';
import db from './databases/dbase.js';

const main = async () => {

    const app = express();
    app.use(express.json())
    
    app.get("/", (req,res) => {
        res.json({mensaje: "Bienvenidos a Sequelize"})    
    })
    
    app.use("/users", routerUser);    
    
    const PORT = 4000;
    const server = app.listen(PORT, () => {
        console.log(`Server on Port ${PORT}`)
    })

    await db.sync().then( () => {
        console.log("Base contectada")
    })

}

