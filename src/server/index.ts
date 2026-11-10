import express from 'express';
import http from 'node:http';
import path from 'node:path';
import cors from 'cors';
import { initSocket } from './socket/handler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { standardApiLimiter, getClientIp } from './middleware/rateLimit.js';

// Route handlers
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import complaintsRoutes from './routes/complaints.js';
import adminRoutes from './routes/admin.js';
import aiRoutes from './routes/ai.js';
import notificationsRoutes from './routes/notifications.js';

const app = express();
const server = http.createServer(app);

const PORT = Number(process.env.PORT) || 5000;
const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';

// Initialize WebSockets
initSocket(server);

// Trust reverse proxies for correct client IP detection
app.set('trust proxy', 1);

// Client IP resolver
app.use((req, _res, next) => {
  try {
    const ip = getClientIp(req);
    Object.defineProperty(req, 'ip', {
      configurable: true,
      enumerable: true,
      get: () => ip,
    });
  } catch {}
  next();
});

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static file serving for uploads
app.use('/uploads', express.static(path.resolve(UPLOAD_DIR)));

// Standard API rate limiting
app.use('/api', standardApiLimiter);

// Health check endpoint
const healthHandler = (_req: express.Request, res: express.Response) => {
  res.json({
    status: 'healthy',
    system: 'SmartGov Connect AI',
    version: '1.0.0',
    environment: 'production',
    timestamp: new Date().toISOString(),
  });
};

app.get('/api/health', healthHandler);
app.get('/health', healthHandler);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/complaints', complaintsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/notifications', notificationsRoutes);

// In production, serve the frontend SPA from dist
const distPath = path.resolve('dist');
app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/uploads') || req.path.startsWith('/socket.io')) {
    return next();
  }
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      next();
    }
  });
});

// Global error handling
app.use(errorHandler);

// Prevent unhandled errors from terminating the process
process.on('uncaughtException', (err) => {
  console.error('SERVER UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('SERVER UNHANDLED REJECTION:', reason);
});

// Start server
if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 SmartGov Connect AI server running on port ${PORT}`);
    console.log(`📡 WebSocket server ready for real-time citizen & admin events`);
  });
}

export { app, server };
export default app;
