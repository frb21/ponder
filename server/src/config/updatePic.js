import pool from './dbconfig.js';
import fs from "fs";
import mysql from "mysql2";

const imagePath = "/home/thinkpad/uploads/default.jpg";
const imageBuffer = fs.readFileSync(imagePath);  
    async function updateProfilePicture() {
      try {
        const imageBuffer = fs.readFileSync(imagePath);
        const query = "UPDATE users SET profile_picture = ? WHERE userId= ?";
        
        const [result] = await pool.query(query, [imageBuffer, 1]);
     
        console.log("Updated profile picture:", result);
      } catch (error) {
        console.error("Error updating profile picture:", error);
      }
    }
                                                                                                                                                                      
updateProfilePicture();

