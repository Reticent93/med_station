const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler')


const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use()