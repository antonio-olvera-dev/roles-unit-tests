import express from "express";
import { commentsController } from "../controllers/comments.controller.js";
import { checkJwkt } from "../middleware/jwt.js";
class CommentsRoutes{

    router = express.Router();

    constructor(){

        //---Routes---
        this.router.get("/users", checkJwkt, commentsController.getUsers);
        this.router.post("/users", checkJwkt, commentsController.setUsers);
        //-----------------------------------------------------
        this.router.get("/admin", checkJwkt,commentsController.getAdmin);
        this.router.post("/admin", checkJwkt,commentsController.setAdmin);


    }
}

export const commentsRoutes = new CommentsRoutes().router;