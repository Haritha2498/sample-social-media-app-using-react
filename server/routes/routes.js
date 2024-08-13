const express = require("express");
const router = express.Router();
const Postdb= require("../models/Post");
const User = require("../models/user");
const bcrypt = require("bcrypt")
const multer = require('multer');


const verifyToken=require("../middleware/authmiddleware")


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});

const upload = multer({ storage: storage })

router.post("/newpost",verifyToken,upload.single('image'), async (req, res) => {
  try {
    const email=req.useremail
    
    const data = req.body;
    // console.log(data,"post data")
    // console.log(email)
    const title=data.title;
    const content=data.content;

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;


    const postdata={email,title,content,imageUrl,comments:[]}


    // console.log(postdata)
    // console.log(postdata,"postdata")
    const result = await Postdb.create(postdata);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});


router.get("/username",verifyToken,async(req,res)=>{
  const useremail=req.useremail
  const user=await User.findOne({useremail:useremail});
  // const username=user.username;
  // console.log(username,"username")
  res.json(user);
})


router.get("/allposts",verifyToken, async (req, res) => {
  const details = await Postdb.find({});
  // console.log(details);
  res.json(details);
});


router.get("/myposts",verifyToken, async (req, res) => {
  const useremail=req.useremail;
  const details = await Postdb.find({email:useremail});
  // console.log(details);
  res.json(details);
});

router.post("/update",verifyToken,async(req,res)=>{
  try{
    console.log("ghj")
  const useremail=req.useremail;
  // console.log(useremail);
  const {username,userdob,password}=req.body;
  // console.log("ghj")
  const hashedPassword = await bcrypt.hash(password, 10);
  const update={username,useremail,userdob,hashedPassword}
  const options = { new: true };
  // console.log("ghj")
  const user=await User.findOne({useremail:useremail});
  // console.log(user)
  if(user){
    const updateddetails=await User.findOneAndUpdate({useremail:useremail},update,options);
    // console.log("updated")
    res.status(200).send("Profile CHANGED");
    }
    }
    catch(error){
            console.log(error);
            res.status(500).json({ message: error.message });
        }
  
})


router.post("/newcomment",verifyToken,async(req,res)=>{
  try{
    const commenterEmail=req.useremail;
    const{id,comment}=req.body;
    const post=await Postdb.findOne({_id:id})
    // console.log(post,"post")
    const commentContent=comment
    const data={commenterEmail,commentContent}
    // console.log(data,"comment")
    post.comments.push(data)
    await post.save();
  }
  catch(error){
            console.log(error);
            res.status(500).json({ message: error.message });
        }
})


router.get("/getcomments/:id",verifyToken,async(req,res)=>{
  try{
    const email=req.useremail;
    const id=req.params.id;
    const post=await Postdb.findOne({_id:id})
    const data=post.comments;
    console.log(data);
    res.json(data);
  }
  
catch(error){
            console.log(error);
            res.status(500).json({ message: error.message });
        }


})


router.delete("/deletecomment/:id",verifyToken,async(req,res)=>{
  try{
    const email=req.useremail;
    const id=req.params.id;
    console.log("dekete")
    const post=await Postdb.findOneAndDelete({_id:id})
    console.log("dekete")
    // console.log(post);
    // if (!post) {
    //   return res.status(404).json({ message: "Post not found or access denied." });
    // }
    // console.log("dekete")
    // post.comments = post.comments.filter(comment => comment._id.toString() !== id);
    // await post.save();
    // console.log("delete comment")
    
  }
  catch(error){
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;
