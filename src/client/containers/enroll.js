import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Form, Text, Select, Textarea, Checkbox, Radio, NestedForm, FormError } from 'react-form'
import * as enrollmentActions from '../actions/enrollment_actions'
import Welcome from '../components/welcome'

class Enroll extends React.Component {

  componentDidMount = () => {

  }

  render(){
    const {phrase} = this.props

    const AddressForm = (
      <Form
        // It can have its own validation function too! This keeps our parent validation function clean and flat 
        validate={values => {
          return {
            street: !values.street ? 'A street is required' : undefined,
            city: !values.city ? 'A city is required' : undefined,
            state: !values.state ? 'A state is required' : undefined
          }
        }}
      >
        <Text
          field='street'
          placeholder='Street'
        />
        <br />
        <Text
          field='city'
          placeholder='City'
        />
        <br />
        <Text
          field='state'
          placeholder='State'
        />
      </Form>
    )

    return(
        <div>
          <Form
            onSubmit={(values) => {
              console.log('Success!', values)
            }}
        
            // Let's give the form some default values 
            defaultValues={{
              friends: []
            }}
        
            // Validating your form is super easy, just use the `validate` life-cycle method 
            validate={values => {
              const { name, email, gender, ethnicity, age, zip_code, incarcerated_parent, parent_relationship_to_child, school_grade, family_income, military_parent, military_parent_deployed, family_assistance, free_lunch, refer_source} = values
              return {
               
              }
            }}
        
            // `onValidationFail` is another handy form life-cycle method 
            onValidationFail={() => {
              window.alert('There is something wrong with your form!  Please check for any required values and try again :)')
            }}
          >
            {({ values, submitForm, addValue, removeValue, getError }) => {
              // A Form's direct child will usually be a function that returns a component 
              // This way you have access to form methods and form values to use in your component. See the docs for a complete list. 
              return (
                // When the form is submitted, call the `submitForm` callback prop 
                <form onSubmit={submitForm}>
        
                  <div>
                    <h6>Full Name</h6>
                    <Text // This is the built-in Text formInput 
                      field='name' // field is a string version of the field location 
                      placeholder='Your full name' // all other props are sent through to the underlying component, in this case an <input /> 
                    />
                  </div>

                  <div>
                    <h6>Guardian's email</h6>
                    <Text // This is the built-in Text formInput 
                      field='email' // field is a string version of the field location 
                      placeholder='email' // all other props are sent through to the underlying component, in this case an <input /> 
                    />
                  </div>

                  <div>
                    <h6>Zipcode</h6>
                    <Text // This is the built-in Text formInput 
                      field='zip_code' // field is a string version of the field location 
                      placeholder="child's zipcode" // all other props are sent through to the underlying component, in this case an <input /> 
                    />
                  </div>
        
                  <div>
                    <h6>Gender</h6>
                    <Select // This is the built-in Select formInput 
                      field='gender'
                      options={[{ // You can ship it some options like usual 
                        label: 'Male',
                        value: 'Male'
                      }, {
                        label: 'Female',
                        value: 'Female'
                      }]}
                    />
                  </div>

                  <div>
                    <h6>ethnicity</h6>
                    <Select // This is the built-in Select formInput 
                      field='ethnicity'
                      options={[{ // You can ship it some options like usual 
                        label: 'African American',
                        value: 'African American'
                      }, {
                        label: 'English, Scottish, and/or Scotch Irish',
                        value: 'English, Scottish, and/or Scotch Irish'
                      },
                      {
                        label: 'Irish',
                        value: 'Irish'
                      },
                      {
                        label: 'American n.e.s.',
                        value: 'American n.e.s.'
                      },
                      {
                        label: 'Italian',
                        value: 'Italian'
                      },
                      {
                        label: 'Polish',
                        value: 'Polish'
                      },
                      {
                        label: 'French',
                        value: 'French'
                      },
                      {
                        label: 'Native American, First Nations, or Alaskan Native',
                        value: 'Native American, First Nations, or Alaskan Native'
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Age</h6>
                    <Text // This is the built-in Text formInput 
                      field='age' // field is a string version of the field location 
                      placeholder="child's current age" // all other props are sent through to the underlying component, in this case an <input /> 
                    />
                  </div>

                  <div>
                    <h6>Are either of the child's legal guardians Incarcerated </h6>
                    <Select // This is the built-in Select formInput 
                      field='incarcerated_parent'
                      options={[{ // You can ship it some options like usual 
                        label: 'Yes',
                        value: true
                      }, {
                        label: 'No',
                        value: false
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Relationship to child</h6>
                    <Select // This is the built-in Select formInput 
                      field='parent_relationship_to_child'
                      options={[{ // You can ship it some options like usual 
                        label: 'Mother',
                        value: 'Mother'
                      }, {
                        label: 'Father',
                        value: 'Father'
                      },
                      {
                        label: 'GrandMother',
                        value: 'GrandMother'
                      },
                      {
                        label: 'GrandFather',
                        value: 'GrandFather'
                      },
                      {
                        label: 'Aunt',
                        value: 'Aunt'
                      },
                      {
                        label: 'Uncle',
                        value: 'Uncle'
                      },
                      {
                        label: 'Other',
                        value: 'Other'
                      }
                      ]}
                    />
                  </div>

                  <div>
                    <h6>Education Level</h6>
                    <Select // This is the built-in Select formInput 
                      field='school_grade'
                      options={[{ // You can ship it some options like usual 
                        label: 'Kindergarten',
                        value: 'Kindergarten'
                      }, {
                        label: '1st grade',
                        value: '1st grade'
                      },
                       {
                        label: '2nd grade',
                        value: '2nd grade'
                      },
                      {
                        label: '3rd grade',
                        value: '3rd grade'
                      },
                      {
                        label: '4th grade',
                        value: '4th grade'
                      },
                      {
                        label: '5th grade',
                        value: '5th grade'
                      },
                      {
                        label: '6th grade',
                        value: '6th grade'
                      },
                      {
                        label: '7th grade',
                        value: '7th grade'
                      },
                      {
                        label: '8th grade',
                        value: '8th grade'
                      },
                      {
                        label: 'Freshman/9th grade',
                        value: 'Freshman/9th grade'
                      },
                      {
                        label: 'Sophomore/10th grade',
                        value: 'Sophomore/10th grade'
                      },
                      {
                        label: 'Junior/11th grade',
                        value: 'Junior/11th grade'
                      },
                      {
                        label: 'Senior/12th grade',
                        value: 'Senior/12th grade'
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Household Income</h6>
                    <Select // This is the built-in Select formInput 
                      field='family_income'
                      options={[{ // You can ship it some options like usual 
                        label: '0 to $9,325',
                        value: 'income_level_1'
                      }, {
                        label: '$9,326 to $37,950',
                        value: 'income_level_2'
                      },
                      {
                        label: '$37,951 to $91,900',
                        value: 'income_level_3'
                      },
                      {
                        label: '$91,901 to $191,650',
                        value: 'income_level_4'
                      },
                      {
                        label: '$191,651 to $416,700',
                        value: 'income_level_5'
                      },
                      {
                        label: '$416,701 to $418,400',
                        value: 'income_level_6'
                      },
                      {
                        label: '$418,401 or more',
                        value: 'income_level_7'
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Is the child's legal guardian in the military?</h6>
                    <Select // This is the built-in Select formInput 
                      field='military_parent'
                      options={[{ // You can ship it some options like usual 
                        label: 'Yes',
                        value: true
                      }, {
                        label: 'No',
                        value: false
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Is the child's legal guardian currently deployed active military duity?</h6>
                    <Select // This is the built-in Select formInput 
                      field='military_parent_deployed'
                      options={[{ // You can ship it some options like usual 
                        label: 'Yes',
                        value: true
                      }, {
                        label: 'No',
                        value: false
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Does your household recieve any finanical aid?</h6>
                    <Select // This is the built-in Select formInput 
                      field='family_assistance'
                      options={[{ // You can ship it some options like usual 
                        label: 'Yes',
                        value: true
                      }, {
                        label: 'No',
                        value: false
                      }]}
                    />
                  </div>

                  <div>
                    <h6>Does your child recieve free school lunches?</h6>
                    <Select // This is the built-in Select formInput 
                      field='free_lunch'
                      options={[{ // You can ship it some options like usual 
                        label: 'Yes',
                        value: true
                      }, {
                        label: 'No',
                        value: false
                      }]}
                    />
                  </div>

                  <div>
                    <h6>How did you hear about BBBS?</h6>
                    <Select // This is the built-in Select formInput 
                      field='refer_source'
                      options={[{ // You can ship it some options like usual 
                        label: 'Option 1',
                        value: 'Option 1'
                      }, {
                        label: 'Option 2',
                        value: 'Option 2'
                      }]}
                    />
                  </div>
        
                  {/* // Since this is the parent form, let's put a submit button in there ;) */}
                  {/* // You can submit your form however you want, as long as you call the `submitForm` callback */}
                  <button>
                    Submit
                  </button>
                </form>
              )
            }}
          </Form>
        </div>
    )
  }
}


function mapStateToProps(state){
  return {
    phrase: state.enrollment.phrase
  }
}

export default connect(mapStateToProps, {
  enrollLittle: enrollmentActions.enrollLittle
})(Enroll)