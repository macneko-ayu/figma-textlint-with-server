import express from 'express';
import cors from 'cors';
import { TextLintEngine } from 'textlint';

const router = express.Router();

router.post('/', cors(), async (req: express.Request, res: express.Response) => {
    try {
        const body = req.body.text;
        const engine = new TextLintEngine();
        const results = await engine.executeOnText(body);
        const messages = results[0].messages.map(item => item.message);
        res.status(200).json({ messages: messages });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
