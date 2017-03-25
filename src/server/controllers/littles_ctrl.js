'use strict'
const User = require('../models/user');
const Promise = require('bluebird');

var mongoose = require('mongoose');

var db = mongoose.connection;


db.on("error", function(err){
    console.error("Connection Error",err);
  });

//POST api/user
module.exports.add = (req, res, next) => {
    let data = req.body || {}
    // Create a user object with information in body
    let user = new User({

      firstName: data.firstName,

      lastName: data.lastName,

      email: data.email,

      password : data.password,

      phone: {

        number: data.phone.number,

        serviceProvider: data.phone.serviceProvider,

        smartPhone: data.phone.smartPhone

      },

      children: data.children,

      dob: data.dob,

      gender: data.gender,

      race: data.race,

      ethnicity: data.ethnicity,

      address: {

        street: data.address.street,

        number: data.address.number,

        zip: data.address.zip,

        city: data.address.city
      },

      married: data.married,

      language: data.language,

      educationLevel: data.educationLevel,

      householdOccupants: data.householdOccupants,

      householdIncome: data.householdIncome,

      employment: {

        status: data.employment.status,

        employer: data.employment.employer

      },

      lastPaidDate: data.lastPaidDate,

      isActive: data.isActive

    });

    user.save(function (err) {
        if (err) {
            handleError(res, err);
        }
        else {
            res.json(user);
        }
    });

}

//PUT api/user/:id
module.exports.update = (req, res, next) => {
  let userId = req.params.id
  let data = req.body || {}

  let query = User.findById(userId)

  let user;

  query.exec()
    .then(user => {
      //Check to see if id matches a user in the db
      if(!user){
        console.log("User not found!");
      }

      if(data.hasOwnProperty('children')){
        (data.children).map((child) => {
          (user.children).push(child);
        });
      }

      if(data.hasOwnProperty('firstName')){
        quiz.firstName = data.firstName
      }

      if(data.hasOwnProperty('lastName')){
        quiz.lastName = data.lastName
      }

      if(data.hasOwnProperty('email')){
        quiz.email = data.email
      }

      if(data.hasOwnProperty('password')){
        quiz.password = data.password
      }

      if(data.hasOwnProperty('phone.number')){
        quiz.phone.number = data.phone.number
      }

      if(data.hasOwnProperty('phone.serviceProvider')){
        quiz.phone.serviceProvider = data.phone.serviceProvider
      }

      if(data.hasOwnProperty('phone.smartPhone')){
        quiz.phone.smartPhone = data.phone.smartPhone
      }

      if(data.hasOwnProperty('phone.smartPhone')){
        quiz.phone.smartPhone = data.phone.smartPhone
      }

      if(data.hasOwnProperty('race')){
        quiz.race = data.race
      }

      if(data.hasOwnProperty('ethnicity')){
        quiz.ethnicity= data.ethnicity
      }

      if(data.hasOwnProperty('address.street')){
        quiz.address.street = data.address.street
      }

      if(data.hasOwnProperty('address.number')){
        quiz.address.number = data.address.number
      }

      if(data.hasOwnProperty('address.zip')){
        quiz.address.zip = data.address.zip
      }

      if(data.hasOwnProperty('address.city')){
        quiz.address.city = data.address.city
      }

      if(data.hasOwnProperty('married')){
        quiz.married = data.married
      }

      if(data.hasOwnProperty('language')){
        quiz.language= data.language
      }

      if(data.hasOwnProperty('educationLevel')){
        quiz.educationLevel= data.educationLevel
      }

      if(data.hasOwnProperty('householdOccupants')){
        quiz.householdOccupants= data.householdOccupants
      }

      if(data.hasOwnProperty('employment.status')){
        quiz.employment.status = data.employment.status
      }

      if(data.hasOwnProperty('employment.employer')){
        quiz.employment.employer = data.employment.employer
      }

      if(data.hasOwnProperty('lastPaidDate')){
        quiz.lastPaidDate= data.lastPaidDate
      }

      if(data.hasOwnProperty('isActive')){
        quiz.isActive= data.isActive
      }

      return user
    })
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(err => next(err))
}

//DELETE api/user/:id
module.exports.delete = (req, res, next) => {
  let userId = req.params.id;
  var query = User.remove({ _id: userId });
  let user;
  return query.exec()
    .then(user => {
      if(!user) {
        throw ("User not found!")
      }
      return user
    })
    .then(result => res.json(result))
    .catch(err => next(err))
}

//FIND by id api/user/:id
module.exports.findById = (req, res, next) => {
  let userId = req.params.id;

  let query = User.findById(userId)
    .lean()

  let user;

  return query.exec()
    .then(user => {
      if(!user) {
        throw ("User not found!")
      }
      return user
    })
    .then(result => res.json(result))
    .catch(err => next(err))
}

//FIND all api/user/all
module.exports.findAll = (req, res, next) => {
  console.log("&&&&FIND ALL CTRL&&&&&&&&");
  let query = User.find({})
    .lean()

  let user;

  return query.exec()
    .then(user => {
      if(!user) {
        throw ("User not found!")
      }
      return user
    })
    .then(result => res.json(result))
    .catch(err => next(err))
}