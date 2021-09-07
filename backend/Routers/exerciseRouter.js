const router = require("express").Router();
const exerciseModel = require("../model/exercise.model");

router.route("/").get((req, res) => {
  exerciseModel
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route("/").post((req, res) => {
  const username = req.body.username;
  const type = req.body.type;
  const duration = req.body.duration;
  const newexModel = new exerciseModel({
    username,
    type,
    duration,
  });
  newexModel
    .save()
    .then((result) => {
      res.send({ status: "data inserted", data: result });
    })
    .catch((err) => {
      res.send({ status: "Error", error: err });
    });
});

router.route("/:username").get((req, res) => {
  const username = req.body.username;
  exerciseModel
    .find({ username: username })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;
  exerciseModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.send({ status: "Item deleted", message: result });
    })
    .catch((err) => {
      res.status(400).send({ status: "error occured", error: err });
    });
});

router.route("/update/:id").post((req, res) => {
  exerciseModel
    .findById(req.params.id)
    .then((result) => {
      result.username = req.body.username;
      result.type = req.body.type;
      result.duration = req.body.duration;
      result
        .save()
        .then((response) =>
          res.json({ status: "Item updated", result: response })
        )
        .catch((err) =>
          res.status(400).json({ status: "data not updated", result: err })
        );
    })
    .catch((err) => {
      res.send("No item Found!");
    });
});

module.exports = router;
