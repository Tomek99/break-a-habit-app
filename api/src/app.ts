import express from 'express';
import registrationRoutes from './routes/registrationRoutes';
import loginRoutes from './routes/loginRoutes';
import userRoutes from './routes/userRoutes';
import habitRoutes from './routes/habitRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { connectDB } from './config/db';

connectDB();
const app = express();
app.use(express.json());

// Routes
app.use('/api/registration', registrationRoutes);
app.use('/api/login-user', loginRoutes);
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
