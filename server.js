const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
    users.push(req.body);
    res.send("Account Created ✅");
});

app.post("/login", (req, res) => {
    const user = users.find(u =>
        u.username === req.body.username &&
        u.password === req.body.password
    );

    if(user) res.send("Login success");
    else res.send("Login failed");
});

app.listen(3000);
