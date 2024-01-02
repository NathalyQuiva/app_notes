import { DataTypes } from 'sequelize'
//import { sequelize } from '../database/database.js'
import { Note } from './Note.js'

import initializeDatabase from '../database/database.js'

const db = await initializeDatabase();

export const Category = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
});


//Relations
Category.hasMany(Note, {
    foreignKey: 'categoryId',
    sourceKey: 'id'
});

Note.belongsTo(Category, {
    foreignKey: 'categoryId',
    targetId: 'id'
});

