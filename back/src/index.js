"use strict";
import express from 'express';
import { commentsRoutes } from './routes/comments.routes.js';
import { keyRoutes } from './routes/key.routes.js';

const app = express()
const port = 3000

app.use(express.json());
app.use("/", commentsRoutes);
app.use("/key", keyRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})