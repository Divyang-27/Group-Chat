const express = require('express');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');

const app = express();

app.use('/login', loginRoutes);
app.use('/message', messageRoutes);

app.listen(3000);
