'use strict'
const Little = require('../models/little');
const Promise = require('bluebird');

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on("error", function(err){
    console.error("Connection Error",err);
  });

//POST api/little
module.exports.add = (req, res, next) => {
    let data = req.body || {}
    // Create a user object with information in body
    let little = new Little({

      name: data.name,
  
      email: data.email,

      gender: data.gender,
      
      ethnicity: data.ethnicity,

      age: data.age,
      
      zip_code: data.zip_code,

      incarcerated_parent: data.incarcerated_parent,
      
      parent_relationship_to_child: data.parent_relationship_to_child,

      school_grade: data.school_grade,
      
      family_income: data.family_income,

      military_parent: data.military_parent,
      
      military_parent_deployed: data.military_parent_deployed,

      family_assistance: data.family_assistance,
      
      free_lunch: data.free_lunch,

      refer_source: data.refer_source

    })

    little.save(function (err) {
        if (err) {
            handleError(res, err);
        }
        else {
            res.json(little);
        }
    });

}

//FIND by id api/user/:id
// module.exports.findById = (req, res, next) => {
//   let userId = req.params.id;

//   let query = User.findById(userId)
//     .lean()

//   let user;

//   return query.exec()
//     .then(user => {
//       if(!user) {
//         throw ("User not found!")
//       }
//       return user
//     })
//     .then(result => res.json(result))
//     .catch(err => next(err))
// }

//FIND all api/littles/find
module.exports.find = (req, res, next) => {
  console.log('*******************LITTLES FIND WORKS!!!!!!!!!!!: ', req)
  let query = Little.find({req})
    .lean()

  let little;

  return query.exec()
    .then(little => {
      if(!little) {
        throw ("No littles found!")
      }
      return little
    })
    .then(result => res.json(result))
    .catch(err => next(err))
}