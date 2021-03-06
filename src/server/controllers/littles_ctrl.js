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
    let reqData = req.body || []

    console.log('data!!!! ', reqData)

    reqData.forEach(data => {
      let little = new Little({

        name: data.name,
    
        email: data.email,

        ChildGender: data.ChildGender,
        
        ChildEthnicity: data.ChildEthnicity,

        ChildAge: data.ChildAge,
        
        zip_code: data.zip_code,

        IncarceratedParent: data.IncarceratedParent,
        
        AdultChildRelationship: data.AdultChildRelationship,

        ChildGrade: data.ChildGrade,
        
        ChildIncomeLevel: data.ChildIncomeLevel,

        ChildFamilyAssistance: data.ChildFamilyAssistance,
        
        ChildFreeReducedlunch: data.ChildFreeReducedlunch,

        ChildAutomaticProgramName: data.ChildAutomaticProgramName

      })

      little.save(function (err) {
          if (err) {
              console.log('ERROR: ', err)
          }
          else {
              res.json(little);
          }
      })
    })
    // Create a user object with information in body
    

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
  let searchCriteria = {}
  if (req.query.name) {
    searchCriteria.name = req.query.name
  } 

  if (req.query.age) {
    searchCriteria.age = req.query.age
  }

  if (req.query.zip_code) {
    searchCriteria.zip_code = req.query.zip_code
  }

  let query = Little.find(searchCriteria)
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