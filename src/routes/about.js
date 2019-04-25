const express = require("express");
const router = express.Router();
const helper = require("../auth/helpers");
const aboutController = require("../controllers/aboutController")
const validation = require("./validation");

router.get("/about/new", aboutController.new);
router.post("/about/create", aboutController.create);
router.get("/about/:id", aboutController.show);
router.get("/about/:id/edit", aboutController.edit);
router.post("/about/:id/update", aboutController.update);
module.exports = router;
