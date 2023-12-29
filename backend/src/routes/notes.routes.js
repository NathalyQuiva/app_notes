import { Router } from 'express'
import { 
    getNotes, 
    createNote, 
    editNote, 
    deleteNote, 
    getNoteId,
    getNotesActive,
    getNotesArchived,
    doActiveOrArchived
} from '../controllers/notes.controllers.js'

const router = Router();

router.get('/', getNotes);
router.get('/active', getNotesActive);
router.get('/archived', getNotesArchived);
router.put('/reverseActive/:id', doActiveOrArchived);
router.post('/', createNote);
router.put('/:id', editNote);
router.delete('/:id', deleteNote);
router.get('/:id', getNoteId);
;

export default router;