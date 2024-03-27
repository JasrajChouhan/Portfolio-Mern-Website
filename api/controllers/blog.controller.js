// allBlogs , postBlog , getOneBlog 
import Blog from '../model/blog.model.js'
import {catcheAsync} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../middlewares/error.js'

export const allBlogs = catcheAsync(async (req , res , next) => {
    try {

        const allBlogs = await Blog.find({});
        res.status(200).json({
            message : "get all blog successfull",
            success : true,
            allBlogs
        })
        
    } catch (error) {
        next(new ErrorHandler(
            'some error occured during the get all blog'
        ))
        
    }
})

export const postBlog = catcheAsync(async (req , res , next) => {

    const {title , content } = req.body;

    if(!title || !content)  return next( new ErrorHandler('please provide title and content',400));

    const {user} = req;
    console.log(user);

    if(user.email !== process.env.ADMIN_EMAIL && user.name !== process.env.ADMIN_NAME &&  user.password !== process.env.ADMIN_PASSWORD && user.phone !== process.env.ADMIN_PHONE ){
        return next(new ErrorHandler(
            'only admin is allowed to create or post the blog'
        ))
    }
    
    
    try {
        const post = await Blog.create({
            title : title,
            content : content
        })

        res.status(200).json({
            success : true,
            message : "successfully post the blog",
            post
        })
    } catch (error) {
        return next(new ErrorHandler(
            'some error occured during the creating the post!!'
        ))
        
    }

})


export const getOneBlog = catcheAsync(async (req , res , next) => {

    const {id} = req.params;
    try {
        const blog = await Blog.findById({_id : id})
        if(!blog){
            res.status(400).json({
                success : false,
                message : "we doesn't find any blog"
            })
        }

        res.status(200).json({
            success : true,
            message : "successfully find the blog"
            ,blog
        })


    } catch (error) {
        return next(new ErrorHandler(
            'some error occured during get one blog' , 400
        ))
        
    }

})