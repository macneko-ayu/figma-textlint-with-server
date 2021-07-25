import express from 'express';
import usersRouter from './textlint';

const router = express.Router();

// v1以下のルーティング
router.use('/textlint', usersRouter);

export default router;