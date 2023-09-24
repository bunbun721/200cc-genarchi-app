import { Router } from 'express';
import QuoteController from "../controllers/quote.controller";

const router = Router();

router.get('/', QuoteController.getQuotes);
router.get('/:id', QuoteController.getQuote);
export default router;