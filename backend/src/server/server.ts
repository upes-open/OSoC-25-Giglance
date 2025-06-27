import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { env } from '@/env';
import userRoutes from '@/routes/user.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet({
  contentSecurityPolicy: env.NODE_ENV !== 'development',
  crossOriginEmbedderPolicy: env.NODE_ENV !== 'development',
}));

app.get('/api', (_req, res) => {
  res.json({ message: 'Hello from the backend API' });
});

app.use('/api/users', userRoutes);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found',
  });
});

export default app;