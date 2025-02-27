// AUTHENTICATION AND AUTHORIZATION HANDLERS
import pool from '../config/dbconfig.js'; 
import { hashPassword, comparePassword } from '../utils/hash.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwt_key = 'a35b322df3342a2d5e4d0996a4128756773754f595cc13d8c5805fd79f08ec44';
// REGISTER USER
export const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    const hashedPassword = await hashPassword(password);
    
    try{
        const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        await pool.query(query, [name, email, hashedPassword]);
        res.status(201).json({message: 'User registered successfully'});
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'User Registration Failed' });
    }
}; 

// LOGIN USER
export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    
    try{
        const query = "SELECT * FROM users WHERE email = ?";
        const [result] = await pool.query(query, [email]);
        const user = result[0];

        if(user && comparePassword(password, user.password)){
            const token = jwt.sign({ userId: user.userId, email: user.email }, jwt_key, { expiresIn: '1h' });
            res.json({ token });
        } 
        else {
            res.status(401).json({ error: 'Invalid Credentials' });    
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

};



