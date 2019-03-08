'use-strict'
const express = require('express')
const routes = express.Router()

const guestCtrl = require('../controller/guest.controller.js');

//How many guests each DJ invited
routes.get('/guests', guestCtrl.firstTask);
routes.get('/top', guestCtrl.secondTask);
routes.get('/location', guestCtrl.thirdTask);


module.exports = routes
