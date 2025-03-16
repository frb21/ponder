import {
    getMyProfile,
    getUsers,
    getUser
} from '../controllers/userController.js';
import express from 'express'; 

const userRouter = express.Router();

userRouter.route('/profile')
        .get(getMyProfile);

userRouter.route('/users/:userId')
    .get(getUser);


userRouter.route('/users')
        .get(getUsers);

export default userRouter;






























