const express = require('express');
const router = express.Router();

const Score = require('../models/Score');

router.get('/', async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        
        const scores = await Score.find({}).sort('time').limit(limit);
        res.json({
            scores: scores
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newScore = await Score.create(req.body.score);
        res.json({
            status: res.statusCode,
            message: "Score created",
            createdScore: newScore,
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;