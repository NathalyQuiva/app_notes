import { Note } from "../models/Note.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll()
        res.json(notes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createNote = async (req, res) => {
    const { tittle, content, categoryId } = req.body;
    try {
        const newNote = await Note.create({
            tittle,
            content,
            categoryId
        });
        res.json(newNote);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const editNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { tittle, content, done, active, categoryId} = req.body;

        const note = await Note.findByPk(id);
        note.tittle = tittle;
        note.content = content;
        note.done = done;
        note.active = active;
        note.categoryId = categoryId;
        await note.save();

        res.json(note);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getNoteId = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findOne({
            where: {
                id,
            },
        });

        if (!note) return res.status(404).json({ message: 'Note does not exist' });
        res.json(note);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getNotesActive = async (req, res) => {
    try {
        const notesActive = await Note.findAll({
            where: {
                active: true,
            },
        });
        res.json(notesActive);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getNotesArchived = async (req, res) => {
    try {
        const notesArchived = await Note.findAll({
            where: {
                active: false,
            },
        });
        res.json(notesArchived);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const doActiveOrArchived = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findOne({
            where: { id }
        })
        note.set(req.body)
        await note.save();
        res.json(note.active);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};