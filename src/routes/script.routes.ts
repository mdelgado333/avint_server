import express from 'express';
import { createScript, getScript } from '../controllers/script.controller';

const router = express.Router();

router.post('/scripts', createScript);
router.get('/scripts/:id', getScript);

export default router;