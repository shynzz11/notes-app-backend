const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./config/db');
const Router = require('./routes/noteroute');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/notes', Router);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port);