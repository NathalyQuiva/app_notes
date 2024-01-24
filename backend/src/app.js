import express from "express";
import cors from "cors";
import categoriesRoutes from './routes/categories.routes.js';
import notesRoutes from './routes/notes.routes.js';

const app = express();

app.use(cors());
//Middleware 
app.use(express.json());

app.use('/api/categories', categoriesRoutes);
app.use('/api/notes', notesRoutes);

export default app;