import { DataTypes } from 'sequelize'
import db from '../databases/dbase.js'

export const User = db.define("usuario", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    },

    apellido:{
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
});

