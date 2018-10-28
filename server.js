'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Mongoose internally uses a promise-like object,
// but it's better to make Mongoose use built in es6 promises
mongoose.Promise = global.Promise;

// config.js is where we control constants for entire
// app like PORT and DATABASE_URL
const {
    DATABASE_URL,
    PORT
} = require('./config');
const {
    BlogPost
} = require('./models');