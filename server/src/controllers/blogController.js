// BLOG ROUTES CONTROLLER
import pool from '../config/dbconfig.js';

// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
    try{
        const { cursor } = req.body;
        const limit = 10;

        let query;
        let values;

        if (cursor){
            query = `SELECT id, title, content, createdAt, authorId
                FROM posts 
                WHERE createdAt < ? 
                ORDER BY createdAt DESC
                LIMIT ? 
            `;
            values = [cursor, limit];
        }

        else{
            query = `
                SELECT id, title, content, createdAt, authorId
                FROM posts
                ORDER BY createdAt DESC
                LIMIT ?
            `;
            values = [limit];
        }

            const [posts] = await pool.query(query, values);

            const nextCursor = posts.length > 0 ? posts[posts.length - 1].createdAt : null;

            res.json({posts, nextCursor});
        }  
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});   // Handle server error
    }
};

// GET SINGLE POST
export const getBlog = async (req, res) => {
    try{
        // Extract post ID and define query. 
        const blogId = req.params.id;
        const query = "SELECT * FROM posts WHERE id = ?";
        // Execute query.
        const [blog] = await pool.query(query, [blogId]);

        // If query returned 0 entry return error 404.
        if(blog.length === 0){
            return res.status(404).json({ error: 'Blog post not found.' });
        }
        else{
            res.status(200).json(blog[0]);
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
};

// CREATE POST
export const createBlog = async (req, res) => {
    try{
    // Extract data from request body.
    const {title, content, authorId} = req.body;

    // Define sql query with placeholders and values for sanitization and preventing SQL injections.
    const query = "INSERT INTO posts (title, content, authorId) VALUES(?, ?, ?)";
    const values = [title, content, authorId];
    
    // Execute query.
    const [result] = await pool.query(query, values);

    // Send successful HTTP response.
    res.status(201).json({message: 'Post successfully created', id: result});
    }
    
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
};

// UPDATE POST
export const updateBlog = async (req, res) => {
    try{
        // Extract blog ID, title, and content
        const blogId = req.params.id;
        const { title, content } = req.body;

        // If both title and content where not given, prompt client to have atleast title or content must be provided
        if(!title && !content){
            return res.status(400).json({error: "At least one field (title or content) must be provided"});
        }

        // Define query string
        let query = "UPDATE posts SET";
        const values = [];

        // If title or content or both is provided, concatenate to query string
        if(title){
            query += " title = ?,";
            values.push(title);
        }
        if(content){
            query += " content = ?,";
            values.push(content);
        }

        // Remove trailing comma and concatenate WHERE clause
        query = query.slice(0, -1) + " WHERE id = ?";
        values.push(blogId);
       
        // Execute query with values
       const [result] = await pool.query(query, values);
        
        if(result.affectedRows === 0){
            return res.status(404).json({ error: "Blog post not found or no changes was made." });
        }

        // Send success HTTP response
        res.status(200).json({ message: "Updated blog post successfully." });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// DELETE POST
export const deleteBlog = async (req, res) => {
    try{
        // Extract blog post ID.
        const blogId = req.params.id;

        // Define query and execute query.
        const query = "DELETE FROM posts WHERE id = ?";
        const [result] = await pool.query(query, [blogId]);

        // Check if no row/entry was affected.
        if(result.affectedRows === 0){
            return res.status(404).json({error: "Blog post not found."});
        }

        // Otherwise return successful HTTP response to client.
        res.status(200).json({message: "Blog post deleted successfully."});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
};








































