const {
  createAnnouncement,
  getAllAnnouncements,
  getSingleAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} = require("../controllers/announcementControllers");

// require express
const express = require("express");

// creating the routers instance
const router = express.Router();

// GET all the workoutes
router.get("/", getAllAnnouncements);

// GET a single workout
router.get("/:id", getSingleAnnouncement);

// POST a new workout
router.post("/", createAnnouncement);

// DELETE a single workout
router.delete("/:id", deleteAnnouncement);

// UPDATE a workout
router.patch("/:id", updateAnnouncement);

module.exports = router;
