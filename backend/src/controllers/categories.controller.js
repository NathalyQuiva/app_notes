import { Category } from "../models/Category.js";
import { Note } from "../models/Note.js";


export const getCategories = async (req, res) => {
    try {
       const categories = await Category.findAll()
       res.json(categories);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createCategory = async (req, res) => {
    const {name, description} = req.body;
    try {
        const newCategory = await Category.create({
            name,
            description
        });
        res.json(newCategory);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const editCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, description} = req.body;

        const category = await Category.findByPk(id);
        category.name = name;
        category.description = description;
        await category.save();

        res.json(category);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params; 
        await Category.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getCategoryId = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findOne({
            where: {
                id,
            },
        });

        if(!category) return res.status(404).json({message: 'Category does not exist'});
        res.json(category);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getCategoryTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const notes = await Note.findAll({
            where: {categoryId: id}
        });
        res.json(notes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
