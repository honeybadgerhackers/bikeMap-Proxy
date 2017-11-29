const express = require('express');
const knex = require('../db.js');
const path = 'waypoint';

const app = express();

app.use(express.json());

app.get(`/${path}`, (req, res) => {
  knex(path).select()
    .then((waypoints) => {
      res.send(waypoints);
    });
});

app.post(`/${path}`, (req, res) => {
    
});

app.put(`/${path}`, (req, res) => {

});

app.delete(`/${path}`, (req, res) => {

});

module.exports = app;
