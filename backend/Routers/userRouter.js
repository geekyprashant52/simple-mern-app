const router = require("express").Router();
const userModel = require("../model/user.model");

router.route("/").get((req, res) => {
  userModel
    .find()
    .then((result) => {
      res.json({ status: true, data: result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, error: err });
    });
});

router.route("/").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let newUser = new userModel({ username, password });
  newUser
    .save()
    .then((result) => {
      res.send({ status: "data inserted", result: result });
    })
    .catch((err) => {
      res.status(400).json({ Error: err });
    });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  console.log("APi hit" + id);
  userModel
    .findById(id)
    .then((result) => res.send({ data: result }))
    .catch((err) => res.status(400).send({ status: "error", result: err }));
});

module.exports = router;
