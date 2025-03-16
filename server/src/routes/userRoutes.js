import {
    getMyProfile,
    getUsers
} from '../controllers/userController.js';
import express from 'express'; 

const userRouter = express.Router();

userRouter.route('/users/:id')
        .get(getMyProfile);

userRouter.route('/users')
        .get(getUsers);

export default userRouter;






























