const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
  res.send(`<html><body><form action="/message" onsubmit="localStorage.setItem('username', document.getElementById('login').value)">
    <input type="text" name="login" id="login" placeholder="Enter username">
    <button type="submit">login</button>
    </form>
    </body>
    </html>`);
});

module.exports = routes;
