const res = require('express/lib/response');
const Post = require('../models/Post');
const router = require('express').Router();

router.post('/', async (req,res)=>{
    try {
       
        const CreatePost = await  new Post({
        author:req.body.author,
        title: req.body.title,
        desc:req.body.desc,  
        })

        const savedPost = await CreatePost.save();

        res.status(200).json(savedPost);
        

    } catch (error) {
      res.status(500).json(error);  
    }


})


router.get('/', async (req,res) =>{
    try {
        const getPosts  = await Post.find();
        
      res.status(200).json(getPosts);
    } catch (error) {
        res.status(500).json(error);
    }
    
})

router.get('/:id', async (req,res)=> {
    try {
        const getPost  = await Post.findById(req.params.id);
        
        res.status(200).json(getPost);
    } catch (error) {
        res.status(500).json(error);
    }
    

})



module.exports = router