const mongoose = require("mongoose");

//schema
const blackListSchema = mongoose.Schema(
  {
    token: String,
  },
  {
    versionKey: false,
  }
);

//model
const BlackListModel = mongoose.model("blacklist", blackListSchema);

module.exports = {
    BlackListModel,
};
