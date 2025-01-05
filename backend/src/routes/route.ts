import { Router } from "express";

const router = Router();

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

export default router;
