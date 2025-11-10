const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// New message form
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

// Handle form submission
router.post('/new', (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

// Message details page
router.get('/message/:id', (req, res) => {
  const id = req.params.id;
  const message = messages[id];
  if (!message) {
    return res.status(404).send('Message not found');
  }
  res.render('message', { title: 'Message Details', message });
});

module.exports = router;
