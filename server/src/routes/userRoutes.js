import {
    getMyProfile
} from '../controllers/userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.route('/users/:id')
        .get(getMyProfile);


export default userRouter;






























