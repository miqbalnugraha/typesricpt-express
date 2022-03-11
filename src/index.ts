import express from "express";

const app = express();

app.route("/").get((req, res) => {
    res.send("halo, ini router pertama saya");
});

app.listen(8000);