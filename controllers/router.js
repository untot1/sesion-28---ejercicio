"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./data_handler');

router.route('/')
  .get((req, res) => {
    res.json(dataHandler.getUsers());
  })
  .post((req, res) => {
    let user = req.body;
    dataHandler.createUser(user);

    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send(`User ${user.firstName} was created!`);
  });

router.route('/:email')
  .get((req, res) => {
    let email = req.params.email;
    res.json(dataHandler.getUserByEmail(email));
  })
  .put((req, res) => {
    let email = req.params.email;
    let user = req.body;
    
    user = dataHandler.updateUser(email, user);
    res.type('text/plain; charset=utf-8');
    res.send(`User ${user.firstName} was updated!`);
  })
  .delete((req, res) => {
    let email = req.params.email;
    let user = dataHandler.deleteUser(email);

    res.type('text/plain; charset=utf-8');
    res.send(user != undefined ? `User ${user.firstName} was deleted!` : `No user with email ${email} was found!`);
  });

module.exports = router;