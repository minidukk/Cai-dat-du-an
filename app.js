const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/app/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application. lmao" });
});

module.exports = app;
