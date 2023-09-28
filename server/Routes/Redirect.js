import express from "express"

const router = express.Router();

router.get('/home', authenticate, redirectToHomepage);

export default router;
