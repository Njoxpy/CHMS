const { default: mongoose } = require("mongoose");
const Event = require("../models/eventsModel");

// POST an event
const createEvent = async (req, res) => {
  const { title, date, description } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!date) {
    emptyFields.push("date");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill all the fields", emptyFields });
  }

  try {
    const event = await Event.create({ title, date, description });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 });

    if (events.length === 0) {
      return res.status(200).json({ message: "No events found!" });
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET a single event
const getSingleEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).res.json({ error: "no such event" });
  }

  const event = await Event.findById(id);

  if (!event) {
    res.status(400).json({ error: "no such event " });
  }

  res.status(200).json(event);
};

// DELETE an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "an event not found" });
  }

  const event = await Event.findOneAndDelete({ _id: id });

  if (!event) {
    res.status(400).json({ error: "an event not found" });
  }

  res.status(200).json(event);
};

// UPDATE an event
const updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "an event not found" });
    }

    const event = await Event.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!event) {
      res.status(400).json({ error: "event not not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  deleteEvent,
  updateEvent,
};
