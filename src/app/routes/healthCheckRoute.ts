import express from 'express';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/ping', (req, res) => {
	res.set('Cache-control', 'no-store');
    res.json({
        statusCode: 200,
        message: 'OK',
        time: new Date().toISOString(),
    });
});

export default healthCheckRouter;
