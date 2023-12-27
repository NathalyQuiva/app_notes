const express = require ('express');
const app = express();



//Setting
app.set('port', process.env.PORT || 3006);
app.set('json spaces', 2);

//Middleware 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/notes', require('./routes/index.js'));


//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
})