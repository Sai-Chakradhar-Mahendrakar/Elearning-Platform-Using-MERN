const express  = require('express');
const courseModel = require('../models/courses.model');
const { UserModel } = require('../models/users.models');
const { VideoModel } = require('../models/video.model');
const { auth } = require('../middlewares/users.middleware');

const videoRoute = express.Router();

     videoRoute.use(auth)

// get all videos;
// Access : all;
// EndPoint: /videos/
// resticted to admin only
// FRONTEND: WE can use to get all the videos uploaded in system for admin user only;
// videoRoute.get('/', async (req,res)=>{
//     const {page,limit,user} = req.query;
//     console.log(user)
//     try{
//         if(req.body.role==='admin'){
//         const videos = await VideoModel.find({});
//         res.status(200).json(videos)
//         }else if(user){
//             const videos = await VideoModel.find({ teacherId: `ObjectId(${user})`});
//             console.log(videos)
//             res.status(200).json(videos);
//         }else{
//             res.status(401).json({error:"you don't have access for videos"})
//         }
//     }catch(err){
//         console.log(err);
//         res.status(400).json({message:'Something Went Wrong',error:err.message})
//     }
// })

videoRoute.get('/', async (req, res) => {
    const { page, limit, user } = req.query;
    console.log(user);
    try {
        if (req.body.role === 'admin') {
            const videos = await VideoModel.find({});
            res.status(200).json(videos);
        } else if (user) {
            const videos = await VideoModel.find({ teacherId: user });
            console.log(videos);
            res.status(200).json(videos);
        } else {
            res.status(401).json({ error: "You don't have access to videos" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something went wrong', error: err.message });
    }
});

// get single video
// Access : all;
// EndPoint: /videos/:videoID
// FRONTEND: We can get the desired video by passing videoID as params;
videoRoute.get('/:videoID', async (req,res)=>{
    try{
    const videoID = req.params.videoID;
    const video = await VideoModel.find({_id:videoID});
    res.status(200).json({video})
    }catch(err){
        console.log(err);
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// add videos;
// Access : admin/teacher
// EndPoint: /videos/add/:courseId
// restricted to admin and teachers only;
// FRONTEND: when teacher want to add videos to the his course

videoRoute.post('/add/:courseId', async (req,res)=>{
    try{
    if(req.body.role==='admin' || req.body.role=='teacher'){
    const data = req.body
    const courseId = req.params.courseId;
      const video = await  VideoModel.findOne({title:req.body.title,link:req.body.link})
      console.log(video)
    if(!video){
         const video = new VideoModel({...data,courseId:courseId,teacher:req.body.username,teacherId:req.body.userId});
           video.save();
    await courseModel.findByIdAndUpdate(courseId,
            { $push: { videos: video._id } }
          );
        res.status(201).json({message:'Video Added',video})
    }else{
        res.status(401).json({error:"you don't have access for videos"})
    }
    }else{
        res.status(400).json({error:'video already Present'})
    }   
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})



// user course with video;
// Access : all;
// EndPoint : /videos/courseVideos/:courseId
// FRONTEND: When user want to access the videos of purchases courses

videoRoute.get('/courseVideos/:courseId', async(req,res)=>{
    try{
        const courseId = req.params.courseId;
        const course = await courseModel.findById({_id:courseId}).populate('videos')
        //console.log(course)
        res.status(200).json({course})
    }catch(err){
        res.status(400).json({message:'Something Went Wrong',error:err.message})
    }
})  


module.exports = {videoRoute}