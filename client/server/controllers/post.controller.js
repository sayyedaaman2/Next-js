const Post = require('../models/post.model')

exports.createPost = async (req, res)=>{
    try {
        const postData = {
            content : req.body.content 
        }

        const postCreated = await Post.create(postData)
        res.status(201).send({
            message : "Successfully Created the Post",
            data : postCreated
        })
    } catch (error) {
        res.status(500).send({
            message : "Some Internal Error "
        })
        console.log(`Some Internal Error ${error}`)
    }
}

exports.getPost = async (req, res)=>{
    try {
        
        const post = await Post.find()
        res.status(201).send({
            message : "Successfully find the Post",
            data : post
        })
    } catch (error) {
        res.status(500).send({
            message : "Some Internal Error "
        })
        console.log(`Some Internal Error ${error}`)
    }
}