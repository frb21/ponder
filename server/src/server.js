import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api', blogRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});



















