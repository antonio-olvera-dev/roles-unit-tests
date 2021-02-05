"use strict";
import express from 'express';
import { commentsRoutes } from './routes/comments.routes.js';





const app = express()
const port = 3000



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})