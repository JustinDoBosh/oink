/*User Model DB Schema Goes Here*/
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

// name, email, gender, ethnicity, age, zip_code, incarcerated_parent, parent_relationship_to_child, school_grade, 
// family_income, military_parent, military_parent_deployed, family_assistance, free_lunch, refer_source
const LittleSchema = new Schema({

  name: {type: String, required: true },
  
  email: {type: String, required: true},

  gender: {type: String, required: true },
  
  ethnicity: {type: String, required: true},

  age: {type: String, required: true },
  
  zip_code: {type: String, required: true},

  incarcerated_parent: {type: Boolean, required: true },
  
  parent_relationship_to_child: {type: String, required: true},

  school_grade: {type: String, required: true },
  
  family_income: {type: String, required: true},

  military_parent: {type: Boolean, required: true },
  
  military_parent_deployed: {type: Boolean, required: true},

  family_assistance: {type: Boolean, required: true },
  
  free_lunch: {type: Boolean, required: true},

  refer_source: {type: String, required: true }

},{

  timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate'}

});

const Little = mongoose.model('Little', LittleSchema);
module.exports = Little;