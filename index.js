const express = require('express');
const path = require('path');
const connectDb = require('./db');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

connectDb();

const app = express();
const PORT = process.env.PORT || 1337;

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
}

app.use(express.json());
app.use('/scores', require('./routes/scores'));

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.all('*', (req, res) => {
    res.status(404).json({
        status: "404",
        error: "Not found"
    });
});

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
