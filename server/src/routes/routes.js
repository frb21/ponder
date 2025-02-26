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

router.route("/posts")
    .get(blogController.getAllBlogs)
    .post(blogController.createBlog);

router.route('/post/:id')
    .get(blogController.getBlog)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog);

export default blogRouter;



































