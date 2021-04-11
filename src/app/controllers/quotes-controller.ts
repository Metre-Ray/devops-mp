import _quotes from '../../data/quotes.json';
import { IQuote } from '../models/quotes.model';
import { v4 as uuidv4 } from 'uuid';

const generateQuotes = () => {
    let num = 0;
    return _quotes.map(quote => {
        num++;
        return {
            ...quote,
            id: num.toString(),
            isDeleted: false,
            tags: quote.tags?.split(', '),
        };
    });
}
const QUOTES: IQuote[] = generateQuotes();


const getQuotesList = (req, res) => {
    res.json(QUOTES);
}

const getRandomQuote = (req, res) => {
    const randomNumber = Math.floor(Math.random() * QUOTES.length);
    res.json(QUOTES[randomNumber]);
}

const getRandomFilteredQuote = (req, res) => {
    const { tag, text } = req.query;
    const quotes = QUOTES.filter(quote => {
        if (tag && text) {
            return quote.tags?.includes(tag) && quote.text.includes(text);
        } else if (tag) {
            return quote.tags?.includes(tag);
        } else if (text) {
            return quote.text.includes(text);
        }
    });
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

const addQuote = (req, res) => {
    const quote = req.body;
    const newQuote = {
        ...quote,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        isDeleted: false,
    }
    QUOTES.push(newQuote);
    res.status(201).json(newQuote);
}

const getQuoteById = (req, res) => {
    const { id } = req.params;
    const quote = QUOTES.find(existingQuote => existingQuote.id === id);
    if (quote) {
        res.json(quote);
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
}

const updateQuote = (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const quoteIndex = QUOTES.findIndex(existingQuote => existingQuote.id === id);
    if (quoteIndex) {
        const neWQuote = {
            ...QUOTES[quoteIndex],
            ...updates,
        };
		QUOTES.splice(quoteIndex, 1, neWQuote);
        res.json(neWQuote);
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
}

const deleteQuote = (req, res) => {
    const { id } = req.params;
    const quote = QUOTES.find(existingQuote => existingQuote.id === id);
    if (quote) {
        quote.isDeleted = true;
        res.json(quote);
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
}

export { getQuotesList, getRandomQuote, getRandomFilteredQuote, addQuote, getQuoteById, updateQuote, deleteQuote };
