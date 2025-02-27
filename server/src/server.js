import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';
import passport from './middleware/passport.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/auth', authRoutes);
app.use('/api', blogRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});



















