import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as dashboardActions from '../actions/dashboard_actions'
import Search from '../components/search'
import { Form, FormGroup, Col, FormControl, Checkbox, Button, Nav, Navbar, Grid, Row, Thumbnail,Header, NavItem, NavDropdown, MenuItem, MenuItemControlLabel, HelpBlock} from 'react-bootstrap';

class Dashboard extends React.Component {

  componentDidMount = () => {

  }

  handleLittlesRequest = (query) => {
    console.log('query: ', query)
    this.props.getLittles(query)
  }

  render(){
    const {phrase,} = this.props

    return (
        <div>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">BBBS Dashboard</a>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav pullRight>
                    <NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Settings</MenuItem>
                      
                      
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}>Sign Out</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar>
            <Search applySearch={this.handleLittlesRequest}/>
              <div class="user_profile"> 
              <Grid>
              <Row>
              <Col xs={6} md={4}>
                <Thumbnail src="https://unsplash.com/search/photos/kids?photo=lU07UqBHQNk" alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              </Row>
            </Grid>
            </div> 
        </div>

    )
  }
}


function mapStateToProps(state){
  return {
    littles: state.dashboard.littles
  }
}

export default connect(mapStateToProps, {
  getLittles: dashboardActions.getLittles
})(Dashboard)