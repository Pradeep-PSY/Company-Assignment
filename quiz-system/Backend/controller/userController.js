const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");

const userController = Router();

userController.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const check = await userModel.findOne({ email });

  if (check) {
    return res.send("User Already Exist");
  }

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res.send("singup failed");
    }

    const new_user = new userModel({ email, name, password: hash });

    await new_user.save();

    res.send("signup successfull");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.send({ message: "Please Signup first", isAuth: false });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.send({ message: "Invalid Credential", isAuth: false });
    }

    if (result) {
      const token = jwt.sign(
        { email, userId: user._id, name: user.name, role: user.role },
        "userbase"
      );

      return res.send({
        message: "login Success",
        token,
        isAuth: true,
        role: user.role,
      });
    } else {
      return res.send({ message: "Invalid Credential", isAuth: false });
    }
  });
});

module.exports = userController;
