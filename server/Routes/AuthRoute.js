import express from 'express';
import { SignUp, Login } from "../Controller/AuthController.js";
import uploadFiles from '../Middleware/imageUploadMiddleware.js';
// const uploadFiles = require('./Middleware/imageUploadMiddleware.js')

const router = express.Router();

router.post('/signup', uploadFiles, SignUp);
router.post('/login', Login);

export default router;
