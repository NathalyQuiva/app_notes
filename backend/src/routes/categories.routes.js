import { Router } from 'express'
import { 
    getCategories, 
    createCategory, 
    editCategory, 
    deleteCategory, 
    getCategoryId,
    getCategoryTasks
} from '../controllers/categories.controller.js'

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.put('/:id', editCategory);
router.delete('/:id', deleteCategory);
router.get('/:id', getCategoryId);
router.get('/:id/notes', getCategoryTasks);



export default router;