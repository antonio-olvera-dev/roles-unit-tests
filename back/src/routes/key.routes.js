import express from "express";
import { keyController } from "../controllers/Key.controller.js";
class KeyRoutes{

    router = express.Router();

    constructor(){

        //---Routes---
        this.router.post("/login",keyController.login);
        this.router.post("/signIn",keyController.signIn);
    }
}

export const keyRoutes = new KeyRoutes().router;