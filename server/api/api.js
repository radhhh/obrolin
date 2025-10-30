const express = require('express');
const router = express.Router({ mergeParams: true });

router.post("/recommend", (req, res) => {
    res.json(["recommendation0", "recommendation1", "recommendation2", "recommendation3", "recommendation4"]);
});

router.get("/answer", (req, res) => {
    res.json({ answer: `ini jawaban ${req.query["questionID"]}` });
})

module.exports = router;