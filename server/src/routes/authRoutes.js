// AUTH ROUTES
import express from 'express';
import {
    registerUser,
    loginUser
}   from '../controllers/authController.js'

const authRouter = express.Router();

// REGISTER ROUTE
authRouter.route('/register')
        .post(registerUser);

// LOGIN ROUTE
authRouter.route('/login')
        .post(loginUser);

export default authRouter;





























