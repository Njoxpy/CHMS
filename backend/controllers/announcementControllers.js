const mongoose = require("mongoose");
const Announcement = require("../models/announcementsModel");

// POST a new member
const createAnnouncement = async (req, res) => {
  const { title, description, day } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (!day) {
    emptyFields.push("day");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill all the fields", emptyFields });
  }

  try {
    const announcement = await Announcement.create({ title, description, day });
    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all events
const getAllAnnouncements = async (req, res) => {
  /* REMEMBER TO USE THE TRY AND CATCH BLOCK HERE FOR YOUR REQUEST */
  try {
    const announcement = await Announcement.find({}).sort({ createdAt: -1 });

    // check if announcement exist
    if (announcement.length === 0) {
      return res.status(200).json({ error: "no announcements found" });
    }

    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a single event
const getSingleAnnouncement = async (req, res) => {
  const { id } = req.params;
  // check if empty id
  if (!id) {
    res.status(404).json({ error: "no such announcement" });
  }

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "no such announcement" });
  }

  const announcement = await Announcement.findById(id);

  if (!announcement) {
    res.status(400).json({ error: "no such announcement " });
  }

  res.status(200).json(announcement);
};

// DELETE an event
const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "announcement not found" });
    }

    const announcement = await Announcement.findOneAndDelete({ _id: id });

    if (!announcement) {
      res.status(400).json({ error: "announcement not found" });
    }

    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE an event
const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "announcement not found" });
    }

    const announcement = await Announcement.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!announcement) {
      res.status(400).json({ error: "event not not found" });
    }

    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createAnnouncement,
  getAllAnnouncements,
  getSingleAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
};
