import { Request, Response, Router } from 'express';
import {getDataAndPrintRequestBody} from "./controller";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(501);
});

router.post('/api/weather', (req: Request, res: Response) => {
    getDataAndPrintRequestBody(req,res);
});

router.put('/api/data/:id', (req: Request, res: Response) => {
    res.status(501);
});

router.delete('/api/data/:id', (req: Request, res: Response) => {
    res.status(501);
});

export default router;