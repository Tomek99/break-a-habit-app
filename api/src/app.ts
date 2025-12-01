import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { connectDB } from './config/db';

connectDB;
const app = express();
app.use(express.json());

//test połączenia
connectDB.connect((err) => {
  if (err) console.error('DB error:', err);
  else console.log('MySQL connected');
});

// Routes
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
