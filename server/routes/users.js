var express = require("express");
var router = express.Router();

const User = require("../models/User.model");
/* GET users listing. */
router.get("/profile/:userId", function (req, res, next) {
  User.findById(req.params.userId)
    .populate("countries_visited")
    .populate("posts")
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/profile-edit/:userId", function (req, res, next) {
  User.findByIdAndUpdate(
    req.params.userId,
    {
      name: req.body.name,
      profile_image: req.body.profile_image,
      city: req.body.city,
      age: req.body.age,
    },
    { new: true }
  ).then((updatedUser) => {
    res.json(updatedUser);
  });
});
module.exports = router;
