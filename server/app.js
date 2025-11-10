const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/api');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
    let sid = req.cookies.sid;
    if(!sid) {
        sid = crypto.randomUUID();
        res.cookie("sid", sid, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 1000
        });
    }
    req.sid = sid;
    next();
})

app.use("/api", router);

module.exports = app;