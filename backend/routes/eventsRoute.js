const events = require('../models/eventsModel')
const{
     createEvent,
    getAllEvents,
    getSingleEvent,
    deleteEvent,
    updateEvent
} = require ('../controllers/eventControllers')

// require express
const express = require('express');

// creating the routers instance
const router = express.Router()

// GET all the workoutes
router.get('/', getAllEvents)

// GET a single workout
router.get('/:id', getSingleEvent)

// POST a new workout
router.post('/', createEvent)

// DELETE a single workout
router.delete('/:id', deleteEvent)

// UPDATE a workout
router.patch('/:id', updateEvent)




module.exports = router;