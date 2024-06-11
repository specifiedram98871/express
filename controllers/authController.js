// const userModel = require("../models/user-model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { generateToken } = require("../utils/generateToken");
// module.exports.registerUser = function (req, res) {
//   try {
//     let { email, password, fullname } = req.body;
//     bcrypt.genSalt(10, function (err, salt) {
//       bcrypt.hash(password, salt, async function (err, hash) {
//         if (err) {
//           res.send(err.message);
//         } else {
//           let user = await userModel.create({
//             email,
//             password: hash,
//             fullname,
//           });
//           // let token = jwt.sign({ email, id: user._id }, "secret")
//           let token = generateToken(user);
//           res.send("token", token);
//           res.send("user created successfully");
//         }
//       });
//     });
//   } catch (error) {
//     res.send(error.message);
//   }
// };
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create the user
    let user = await userModel.create({
      email,
      password: hash,
      fullname,
    });

    // Generate the token
    let token = generateToken(user);

    // Send response with token and success message
    res.status(201).json({
      message: "User created successfully",
      token,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
