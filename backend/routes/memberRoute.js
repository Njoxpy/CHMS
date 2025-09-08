const events = require('../models/membersModel')
const{
    createMember,
    getAllMembers,
    getSingleMember,
    deleteMember,
    updateMember
} = require ('../controllers/memberController')

// require express
const express = require('express');

// creating the routers instance
const router = express.Router()

// GET all the workoutes
router.get('/',  getAllMembers)

// GET a single workout
router.get('/:id', getSingleMember)

// POST a new workout
router.post('/',  createMember)

// DELETE a single workout
router.delete('/:id', deleteMember)

// UPDATE a workout
router.patch('/:id', updateMember)




module.exports = router;