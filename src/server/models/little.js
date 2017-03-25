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

  ChildGender: {type: String, required: true },
  
  ChildEthnicity: {type: String, required: true},

  ChildAge: {type: Number, required: true },
  
  zip_code: {type: String, required: true},

  IncarceratedParent: {type: Boolean, required: true },
  
  AdultChildRelationship: {type: String, required: true},

  ChildGrade: {type: String, required: true },
  
  ChildIncomeLevel: {type: String, required: true},

  ChildFamilyAssistance: {type: Boolean, required: true },
  
  ChildFreeReducedlunch: {type: Boolean, required: true},

  ChildAutomaticProgramName: {type: String, required: true},


},{

  timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate'}

});

const Little = mongoose.model('Little', LittleSchema);
module.exports = Little;