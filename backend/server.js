//require dotenv file
require('dotenv').config()
const events = require('./routes/eventsRoute')
const members = require('./routes/memberRoute')
const announcements = require('./routes/announcementRoute')

// 01: require express
const express = require('express');

const cors = require('cors');

// require mongoose
const mongoose = require('mongoose');

// 02: start the express app
const app = express();

// 05: middleware
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    console.log(res.path, res.method);
    next();
})

// 04: reacting to the request
app.use( '/api/v1/events', events)
app.use( '/api/v1/members', members)
app.use( '/api/v1/announcements', announcements)

// Connect to DataBase
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // 03: listening for the request
app.listen(process.env.PORT, () => {
    console.log('connected to database & listening to port', process.env.PORT); 
})

})
.catch((error) => {
    console.log(error)
})
