import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as dashboardActions from '../actions/enrollment_actions'
import Search from '../components/search'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, Nav, Navbar, Header, NavItem, NavDropdown, MenuItem, MenuItemControlLabel, HelpBlock} from 'react-bootstrap';

class Dashboard extends React.Component {

  componentDidMount = () => {

  }

  render(){
    const {phrase,search} = this.props

    return (
        <div>
            <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Settings</MenuItem>
        
        
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Sign Out</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
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