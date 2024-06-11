// const express = require("express");
// const userModel = require("../models/user-model");
// const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("Its Working");
// });

// router.post("/register", async function (req, res) {
//   try {
//     let { email, password, fullname } = req.body;
//     let user = await userModel.create({ email, password, fullname });
//     res.status(201).send(user);
//   } catch (error) {
//       console.log(error);
//   }
// });
// module.exports = router;
