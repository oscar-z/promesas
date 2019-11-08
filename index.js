//** request */
const request = require('request');
//** express */
const express = require('express');
//** bodyParser **
const bodyParser = require('body-parser');
//** Init app on express */
const app = express();
//** Config bodyParser */
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
