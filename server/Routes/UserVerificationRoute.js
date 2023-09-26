import express from 'express';
import { userVerification } from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.post('/', userVerification);

export default router;
