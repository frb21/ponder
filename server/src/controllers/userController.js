// USER PROFILE CONTROLLERS
import  pool from '../config/db.js';

export const getMyProfile = async (req, res) => {
    try{
        const userId = req.user.userId;
        const query = "SELECT userId, email FROM users WHERE userId = ?";

        const [user] = pool.query(query, [userId]);

        if(user.length === 0){
            return res.status(404).json({message: "User not found."});
        }

        res.json({
            userId: user[0].userId,
            name: user[0].name,
            email: user[0].email
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};



































