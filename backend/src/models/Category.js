import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Note } from './Note.js'

export const Category = sequelize.define('categories', {
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
})

Note.belongsTo(Category, {
    foreignKey: 'categoryId',
    targetId: 'id'
})

