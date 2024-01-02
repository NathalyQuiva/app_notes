import { DataTypes } from 'sequelize'
import initializeDatabase from '../database/database.js'

const db = await initializeDatabase();

export const Note = db.define('notes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    tittle: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN, 
        defaultValue: true
    },
}, {
    timestamps: false
});