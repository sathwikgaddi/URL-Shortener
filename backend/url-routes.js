const express = require("express");

const urlController = require("./url-controller");

const router = express.Router();

router.post("/create", urlController.createLink);

router.get("/:id", urlController.getLink);

module.exports = router;
