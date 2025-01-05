"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Use imported routes
router.get("/", function (req, res, next) {
    res.send("Hey bro welcome to / route.");
});
router.get("/profile", function (req, res, next) {
    res.send("Hey bro welcone to profile route.");
});
router.get("/land", function (req, res, next) {
    res.send("Hey bro welcone to land route.");
});
exports.default = router;
