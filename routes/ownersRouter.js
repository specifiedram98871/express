const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/", async (req, res) => {
  res.send("Hello from ownersRouter");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
          return res.status(503).send("Owners already exist"); 
      }
      let { fullname, email, password } = req.body;
      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });
      res.status(201).send(createdOwner);
    } catch (error) {
      res.status(500).send("An error occurred while creating the owner");
    }
  });
}

module.exports = router;
