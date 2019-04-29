const express = require("express");
const router = express.Router();
const helper = require("../auth/helpers");
const validation = require("./validation");
const aboutController = require("../controllers/aboutController");


//router.get("/about", aboutController.index);
router.get("/about/new", aboutController.new);
router.post("/about/create", aboutController.create);
router.get("/about/:id", aboutController.show);
router.get("/about/:id/edit", aboutController.edit);
router.post("/about/:id/update", aboutController.update);
module.exports = router;
