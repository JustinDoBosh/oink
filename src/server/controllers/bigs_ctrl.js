'use strict'
const Big = require('../models/big');
const Promise = require('bluebird');

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on("error", function(err){
    console.error("Connection Error",err);
  });

//POST api/big/add
module.exports.add = (req, res, next) => {
    console.log('********ADDING BIGS******')
    let reqData = req.body || []

    console.log('data!!!! ', reqData)

    reqData.forEach(data => {
      let big = new Big({

        Name: data.Name,

        Email: data.Email,

        Hybrid: data.Hybrid,
  
        MatchType: data.MatchType,

        VolGender: data.VolGender,

        VolZip: data.VolZip,
        
        VolEthnicity: data.VolEthnicity,

        VolAge: data.VolAge,
        
        VolEducationLevel: data.VolEducationLevel,

        VolMaritalStatus: data.VolMaritalStatus,
        
        VolEmploymentLengthYears: data.VolEmploymentLengthYears,

        VolReferralSource: data.VolReferralSource
      })

      big.save(function (err) {
          if (err) {
              console.log('ERROR: ', err)
          }
          else {
              res.json(big);
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

//FIND all api/big/find
module.exports.find = (req, res, next) => {
  let searchCriteria = {}
  if (req.query.Name) {
    searchCriteria.Name = req.query.Name
  } 

  if (req.query.age) {
    searchCriteria.VolAge = req.query.VolAge
  }

  if (req.query.VolZip) {
    searchCriteria.VolZip = req.query.VolZip
  }

  let query = Big.find(searchCriteria)
    .lean()

  let big;

  return query.exec()
    .then(big => {
      if(!big) {
        throw ("No bigs found!")
      }
      return big
    })
    .then(result => res.json(result))
    .catch(err => next(err))
}