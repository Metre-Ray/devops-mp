import express from 'express';
import 'dotenv/config';
import process from 'process';
import quotesRouter from './app/routes/quotesRoute';
import path from 'path';
import healthCheckRouter from './app/routes/healthCheckRoute';

const PORT = process.env.APP_PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use('/api/quotes', quotesRouter);
app.use('/', healthCheckRouter);

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/../static/index.html'));
});

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// graceful shutdown
const sigs = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
sigs.forEach(sig => {
	process.on(sig, () => {
		console.log('graceful shutdown');
		server.close((err) => {
			if (err) {
				console.error(err);
				process.exit(1);
			}
		});
	});
});
