// BLOG ROUTES
import express from 'express';
import {
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
} from '../controllers/blogController.js';
const blogRouter = express.Router();

blogRouter.route('/posts')
    .get(getAllBlogs)
    .post(createBlog);

blogRouter.route('/post/:id')
    .get(getBlog)
    .put(updateBlog)
    .delete(deleteBlog);

export default blogRouter;



































