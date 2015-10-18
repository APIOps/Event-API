'use strict';

exports.addPet = function(pet) {

  var examples = {};
  
  examples['application/json'] = {
  "zipcode" : "aeiou",
  "address" : "aeiou",
  "enddate" : "2015-10-18T08:53:37.514+0000",
  "city" : "aeiou",
  "participantCount" : 123456789,
  "eventUrl" : "aeiou",
  "imageUrl" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "title" : "aeiou",
  "startdate" : "2015-10-18T08:53:37.514+0000",
  "class" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.findPetById = function(id) {

  var examples = {};
  
  examples['application/json'] = {
  "zipcode" : "aeiou",
  "address" : "aeiou",
  "enddate" : "2015-10-18T08:53:37.514+0000",
  "city" : "aeiou",
  "participantCount" : 123456789,
  "eventUrl" : "aeiou",
  "imageUrl" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "title" : "aeiou",
  "startdate" : "2015-10-18T08:53:37.514+0000",
  "class" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.deleteEvent = function(id) {

  var examples = {};
  

  
}
exports.findEventParticipantsById = function(id) {

  var examples = {};
  
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : 123456789
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.findEvents = function(city, limit) {

  var examples = {};
  
  examples['application/json'] = [ {
  "zipcode" : "aeiou",
  "address" : "aeiou",
  "enddate" : "2015-10-18T08:53:37.518+0000",
  "city" : "aeiou",
  "participantCount" : 123456789,
  "eventUrl" : "aeiou",
  "imageUrl" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "title" : "aeiou",
  "startdate" : "2015-10-18T08:53:37.518+0000",
  "class" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
