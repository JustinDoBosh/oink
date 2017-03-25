/*User Model DB Schema Goes Here*/
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const BigSchema = new Schema({
    Name: {type: String, required: true },
  
    Email: {type: String, required: true},

    Hybrid: {type: Boolean, required: true },
    
    MatchType: {type: String, required: true},

    VolGender: {type: String, required: true },

    VolZip: {type: String, required: true},
    
    VolEthnicity: {type: String, required: true},

    VolAge: {type: Number, required: true },
    
    VolEducationLevel: {type: String, required: true},

    VolMaritalStatus: {type: String, required: true },
    
    VolEmploymentLengthYears: {type: Number, required: true}

},{

  timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate'}

});

const Big = mongoose.model('Big', BigSchema);
module.exports = Big;