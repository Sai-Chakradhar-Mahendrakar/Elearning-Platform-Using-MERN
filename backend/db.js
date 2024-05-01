const mongoose = require("mongoose");
require("dotenv").config();

//Database Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/elearning', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

module.exports = {
  db
};
