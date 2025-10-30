require('dotenv').config();

const express = require('express');
const router = express.Router({ mergeParams: true });
const { getQuestions, getAnswer } = require('./provider.js');

const { LRUCache } = require('lru-cache');

const cache = new LRUCache({
    max: 5000,
    ttl: 60 * 60 * 1000,
});


router.post("/recommend", async (req, res) => {
    const questions = await getQuestions(req.body);
    cache.set(req.sid, { questions, at: Date.now() });
    res.json(questions);
});

router.get("/answer", async (req, res) => {
    if(cache.has(req.sid)) {
        const { questions } = cache.get(req.sid);
        const questionID = req.query["questionID"];
        const answer = await getAnswer(questions[questionID]);
        res.json({ answer });
        cache.delete(req.sid);
    }
});

module.exports = router;