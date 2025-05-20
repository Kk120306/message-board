const express = require("express");
const router = express.Router();

let messageId = 1;

const messages = [
    {
        id : messageId++,
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id : messageId++,
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        id : messageId++,
        text: "Good morning everyone!",
        user: "Samantha",
        added: new Date()
    },
    {
        id : messageId++,
        text: "Looking forward to learning more about Express.",
        user: "Kai",
        added: new Date()
    }
];

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
];


router.get("/", (req, res) => {
    res.render("index", { messages, links })
});

router.get("/new", (req, res) => {
    res.render("form")
})

router.get("/:id", (req, res) => {
    const message = messages.find(msg => msg.id === parseInt(req.params.id));
    if (!message) {
        return res.status(404).send("Message not found");
    }
    res.render('message', { message });
})

router.post("/new", (req, res) => {
    const { user, text } = req.body;
    messages.push({
        id : messageId++,
        text: text,
        user: user,
        added: new Date()
    });
    res.redirect("/");
})

module.exports = router;