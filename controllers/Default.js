'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addPet = function addPet (req, res, next) {
  var pet = req.swagger.params['pet'].value;
  

  var result = Default.addPet(pet);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.findPetById = function findPetById (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Default.findPetById(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.deleteEvent = function deleteEvent (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Default.deleteEvent(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.findEventParticipantsById = function findEventParticipantsById (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Default.findEventParticipantsById(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.findEvents = function findEvents (req, res, next) {
  var city = req.swagger.params['city'].value;
  var limit = req.swagger.params['limit'].value;
  

  var result = Default.findEvents(city, limit);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
