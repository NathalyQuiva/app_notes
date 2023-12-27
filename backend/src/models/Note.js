import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Note = sequelize.define('notes', {
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