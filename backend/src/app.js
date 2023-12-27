import express from "express";
import categoriesRoutes from './routes/categories.routes.js';
import notesRoutes from './routes/notes.routes.js';

const app = express();

//Middleware 
// //app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/categories', categoriesRoutes);
app.use('/api/notes', notesRoutes);

export default app;