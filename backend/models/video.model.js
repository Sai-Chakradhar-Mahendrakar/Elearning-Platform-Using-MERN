const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teacher:{
    type: String,
    require:true
  },
  teacherId:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String,
    required: true
  },
  video_length: {
    type: Number,
    default: 0
  },
  img:{
    type: String,
    require: true
  }
  ,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: true
  }
});

const VideoModel = mongoose.model('videos', videoSchema);

module.exports = {VideoModel};
