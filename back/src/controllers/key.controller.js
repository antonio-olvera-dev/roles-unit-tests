import jwt from "jsonwebtoken";
import { MY_SECRET } from "../config.js";
class KeyController {
  constructor() {}

  //---Login---
  login(req, res) {
    res.send("login");
  }

  //---Set Users---
  signIn(req, res) {
    const token = jwt.sign(
      {
        email: "e@g.com",
        password: "1234",
      },
      MY_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.send(token);
  }
}

export const keyController = new KeyController();
