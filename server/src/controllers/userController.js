// USER PROFILE CONTROLLERS
import  pool from '../config/dbconfig.js';

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

export const getUsers =  async (req, res) => {
    try{
        const query = "SELECT * FROM users";
        const [users] = await pool.query(query);
        res.status(200).json(users);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
};

































