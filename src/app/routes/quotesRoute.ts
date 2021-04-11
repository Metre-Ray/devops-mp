import express from 'express';
import { addQuote, deleteQuote, getQuoteById, getQuotesList, getRandomFilteredQuote, getRandomQuote, updateQuote } from '../controllers/quotes-controller';

const quotesRouter = express.Router();

quotesRouter.get('/', (req, res) => {
    getQuotesList(req, res);
});

quotesRouter.get('/random', (req, res) => {
    const { tag, text } = req.query;
    if (tag || text) {
		console.log()
        getRandomFilteredQuote(req, res);
        return;
    }
    getRandomQuote(req, res);
});

quotesRouter.post('/', (req, res) => {
    addQuote(req, res);
});

quotesRouter.get('/:id', (req, res) => {
    getQuoteById(req, res);
});

quotesRouter.put('/:id', (req, res) => {
    updateQuote(req, res);
});

quotesRouter.delete('/:id', (req, res) => {
    deleteQuote(req, res);
});


export default quotesRouter;
