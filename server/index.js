import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db.js'
import routes from './routes/routes.js';

const PORT = process.env.PORT || 4000;

dotenv.config();
await connectDB();

const app = express();
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(morgan('tiny'));

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api', routes);


app.listen(PORT, () => console.log(`API on started at port ${PORT}`));
