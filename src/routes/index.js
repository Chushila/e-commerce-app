import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { indexPage } from '../controllers';
import { messagesPage , addMessage } from '../controllers/message';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
export default indexRouter;
