const express = require('express');
const router = express.Router({ mergeParams: true });
const crypto = require('crypto');
const { getQuestions, getAnswer } = require('./provider.js');
const SECRET = process.env.SECRET || 'secret-key'

function sign(payload) {
    const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const sig = crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
    return `${data}.${sig}`;
}

function verify(token) {
    if(!token) return null;
    const [data, sig] = token.split('.');
    const expect = crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
    if (sig !== expect) return null;
    return JSON.parse(Buffer.from(data, 'base64url').toString());
}

router.post("/recommend", async (req, res) => {
    try {
        const { token, keywords } = req.body;
        let payload = verify(token) || {
            transcript: [],
        };

        const questions = await getQuestions(payload.transcript, keywords);
        payload.questions = questions;

        const newToken = sign(payload);
        res.json({ questions, token: newToken });
    }
    catch(err) {
        console.error(err);
        res.status(500).send('Internal server error')
    }
});

router.post("/answer", async (req, res) => {
    try {
        const { token, index } = req.body;
        const payload = verify(token);
        if(!payload) {
            return res.status(400).send('Invalid token');
        }

        const question = payload.questions[index];
        if(!question) {
            return res.status(400).send('Invalid index');
        }

        const answer = await getAnswer(question, payload.transcript);
        payload.transcript.push({
            role: "user",
            content: question
        });
        payload.transcript.push({
            role: "assistant",
            content: answer
        });
        const newToken = sign(payload);
        res.json({ question, answer, token: newToken });
    }
    catch(err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;