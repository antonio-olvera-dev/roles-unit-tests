"use strict";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { MY_SECRET } from "../config.js";
import { db } from "./../database.js";
import { login } from "./../models/keyLogin.model.js";
import { signIn } from "./../models/keySignIn.model.js";

class KeyController {
  constructor() {}

  //---Login---
  async login(req, res) {
    try {

      const body = await req.body;

      await mongoose.connect(db.dblocal, db.dbdeprecado);

      const dataLogin = await signIn.findOne({email: body.email});

      if (dataLogin.password != body.password) {
        res.sendStatus(401);
        return true;
      }

      const token = jwt.sign(
        {
          email: body.email
        },
        MY_SECRET,
        {
          expiresIn: "3h",
        }
      );

      res.send(token);

    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }



  //---Set Users---
  async signIn(req, res) {
    try {

      const body = await req.body;

      await mongoose.connect(db.dblocal, db.dbdeprecado);
      const newSignIn = new signIn(body);
      await newSignIn.save();

      
      const token = jwt.sign(
        {
          email: body.email
        },
        MY_SECRET,
        {
          expiresIn: "3h",
        }
      );

      res.send(token);

    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

export const keyController = new KeyController();
