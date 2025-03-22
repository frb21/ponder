import {
    getMyProfile,
    getUsers,
    getUser
} from '../controllers/userController.js';
import express from 'express'; 
import passport from 'passport';

const userRouter = express.Router();

userRouter.route('/profile')
    .get(passport.authenticate("jwt", { session: false }), getMyProfile);

userRouter.route('/users/:userId')
    .get(getUser);


userRouter.route('/users')
    .get(passport.authenticate("jwt", { session: false }), getUsers);

export default userRouter;






























