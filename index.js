const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("App running successfully on AWS");
})

app.get("/health", (req, res) => {
    res.send("Everything is OK");
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})