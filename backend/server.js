const express = require("express");
const cors = require("cors");
//require dotenv file
require("dotenv").config();

// import routes
const eventsRoutes = require("./routes/eventsRoute");
const membersRoutes = require("./routes/memberRoute");
const announcementsRoutes = require("./routes/announcementRoute");

// 02: start the express app
const app = express();

// connect db
const connectDb = require("./config/DB");

// 05: middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// register routes
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/members", membersRoutes);
app.use("/api/v1/announcements", announcementsRoutes);

app.listen(process.env.PORT, () => {
  connectDb();

  console.log(`Listening to port http://localhost:${process.env.PORT}`);
});
