const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));

routes.post('/', (req, res, next) => {
  fs.writeFile(
    'message.txt',
    `${req.body.login} : ${req.body.message}`,
    { flag: 'a' },
    (error) => {
      console.log(error);
      res.redirect('/message');
    }
  );
});
routes.get('/', (req, res, next) => {
  fs.readFile('message.txt', 'utf-8', (err, data) => {
    res.send(`<html>
    <body>
    <p>${data}</p>
    <form action="/message" method="POST">
    <input type="hidden" name="login" id="login">
    <input type="text" name="message" id="message" placeholder="Enter message">
    <button type="submit">Send Message</button>
    </form>
    <script>
    document.getElementById('login').value=localStorage.getItem('username')
    </script>
    </body>
    </html>`);
    if (err) {
      console.log(err);
    }
  });
});

module.exports = routes;
