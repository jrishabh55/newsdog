const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("", (request, response) => response.send("admin"));
router.use("/admin", require("./api/admin"));
router.use("/users", require("./api/users"));
router.use("/news", passport.authenticate("token", {session: false}), require("./api/news"));

module.exports = router;
