import jwt from "jsonwebtoken";
import { MY_SECRET } from "../config.js";

export const checkJwkt = (req, res, next) => {

  try {
    const token = req.headers["authoritation"];
    let decoded =  jwt.verify(token,  MY_SECRET);
    //TODO add user to req.token = token;
  } catch (error) {
    res.sendStatus(401);
  }
  next();
};
