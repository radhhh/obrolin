const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/api');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", router);

app.listen(3000, (err) => {
    if(err) console.log(err);
    console.log("server started on port 3000");
});