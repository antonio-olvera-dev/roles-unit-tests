import mongoose from "mongoose";
import { users } from "../models/users.model.js";
import { admin } from "../models/admin.model.js";
import { db } from "./../database.js";
import jwt from "jsonwebtoken";

class CommentsController{
    constructor(){}

    //---Get Users---
    async  getUsers(req, res){
        try {

            await mongoose.connect(db.dblocal, db.dbdeprecado);
            const dataUsers = await users.find({});
    
            res.send(dataUsers);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };

    //---Set Users---
    async setUsers(req, res){
        try {

            const body = await req.body;
            
            await mongoose.connect(db.dblocal, db.dbdeprecado);
            const newUsers = new users( body );
            await newUsers.save();
       
            res.sendStatus(200);
            
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };

    //--------------------------------------

    //---Get Admin---
    async getAdmin(req,res){
        
        try {

            const token = req.token;
            const body = jwt.decode(token);
    
            await mongoose.connect(db.dblocal, db.dbdeprecado);
             //---Check Role---
             //TODO check role
            const dataAdmin = await admin.find({});
    
            res.send(dataAdmin);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };

    //---Set Admin---
    async setAdmin(req, res){
        try {

            const body = await req.body;
            
            await mongoose.connect(db.dblocal, db.dbdeprecado);
            //---Check Role---
            //TODO check role
            const newAdmin = new admin( body );
            await newAdmin.save();
       
            res.sendStatus(200);
            
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };

}

export const commentsController = new CommentsController();