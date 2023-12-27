const {Router} = require('express');
const router = Router();

const { getNotes } = require('../controllers/index.controllers')


router.get('/', (req, res) => {
    res.send('notes')
});


module.exports = router; 
