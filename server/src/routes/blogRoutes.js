// BLOG ROUTES
import express from 'express';
import {
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
} from '../controllers/blogController.js';
import passport from "passport";

const blogRouter = express.Router();

blogRouter.route('/posts')
    .get(getAllBlogs)
    .post(passport.authenticate("jwt", { session: false }), createBlog);

blogRouter.route('/post/:id')
    .get(passport.authenticate("jwt", { session: false }), getBlog)
    .put(passport.authenticate("jwt", { session: false }), updateBlog)
    .delete(passport.authenticate("jwt", { session: false }), deleteBlog);

export default blogRouter;



































