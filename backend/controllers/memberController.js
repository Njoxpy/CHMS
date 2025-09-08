const { default: mongoose } = require('mongoose');
const Member = require('../models/membersModel')

// POST an event
const createMember =  async (req, res) => {
     const{name, date, gender, age} = req.body;

       let emptyFields = [];

     if(!name){
        emptyFields.push('name')
     }

     if(!date){
        emptyFields.push('date')
     }

     if(!gender){
        emptyFields.push('gender')
     }

     if(!age){
        emptyFields.push('age')
     }

     if(emptyFields.length > 0){
        return res.status(400).json({error: 'please fill all the fields', emptyFields})
     }
    
    try{
        const member = await Member.create({name, date, gender, age});
        res.status(200).json(member);
    } catch (error){
        res.status(400).json({error: error.message})
    }
    
}

// GET all events
const getAllMembers = async (req, res) => {
    const member = await Member.find({}).sort({createdAt: -1})
    res.status(200).json(member)
}

// GET a single member
const getSingleMember = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).res.json({error: "no such member"})
    }

    const member = await Member.findById(id)

    if(!member){
        res.status(400).json({error: "no such member "})
    }

    res.status(200).json(member)

 
}

// DELETE member
const deleteMember = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'a member not found'});
    }

    const member = await Member.findOneAndDelete({_id: id});

    if(!member){
        res.status(400).json({error: 'a member not found'});
    }

    res.status(200).json(member)
}

// UPDATE a member
const updateMember = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'a member not found'});
    }

    const member = await Member.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!member){
        res.status(400).json({error: "a member not found"})
    }

    res.status(200).json(member)

}
module.exports = {
    createMember,
    getAllMembers,
    getSingleMember,
    deleteMember,
    updateMember
}