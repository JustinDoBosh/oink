import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Form, Text, Select, Textarea, Checkbox, Radio, NestedForm, FormError } from 'react-form'
import * as dashboardActions from '../actions/enrollment_actions'
import Search from '../components/search'

class Dashboard extends React.Component {

  componentDidMount = () => {

  }

  render(){
    const {phrase,search} = this.props

    return (
        <div>
            <Search applySearch={search}/>
        </div>
    )
  }
}


function mapStateToProps(state){
  return {
    
  }
}

export default connect(mapStateToProps, {
  search: dashboardActions.search
})(Dashboard)