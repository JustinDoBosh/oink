import React, { PropTypes } from 'react';
import { Form, Glyphicon, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel, HelpBlock} from 'react-bootstrap';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', age: null, zipCode: null, filterShown: false}
    }

    static propTypes = {
        applySearch: PropTypes.func.isRequired
    }

    handleNameSearch = (e) => {
        console.log('event.target.value: ', e.target.value)
        this.setState({name: e.target.value});
    }

    handleAgeSearch = (e) => {
        console.log('event.target.value: ', e.target.value)
        this.setState({age: e.target.value});
    }

    handleZipCodeSearch = (e) => {
        console.log('event.target.value: ', e.target.value)
        this.setState({zipCode: e.target.value});
    }

    handleSearch = () => {
        this.props.applySearch({name: this.state.name, age: this.state.age, zipCode: this.state.zipCode})
    }

    toggleFilterBar = () => {
        this.setState({filterShown: !this.state.filterShown})
    }

    render() {

        return (
            <div style={{ backgroundColor: '#f1f1f1', borderBottom: '1px solid grey', boxShadow: '4px 6px 22px 0px rgba(128,128,128,1)'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}} id="filterBtn" onClick={this.toggleFilterBar}>
                    <span>Filter Littles</span> <Glyphicon glyph="filter" />
                </div>
                { this.state.filterShown ? <Form horizontal>
                    <FormGroup>
                    <Col sm={6} smPush={3}>
                        <HelpBlock>Search by name</HelpBlock>
                        <FormControl type="text" value={this.state.name} onChange={this.handleNameSearch}/>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col sm={6} smPush={3}>
                        <HelpBlock>Search by age</HelpBlock>
                        <FormControl type="number" value={this.state.age} onChange={this.handleAgeSearch}/>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col sm={6} smPush={3}>
                        <HelpBlock>Search by zipCode</HelpBlock>
                        <FormControl type="text" value={this.state.zipCode} onChange={this.handleZipCodeSearch}/>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col smOffset={8} sm={3}>
                        <Button type="submit" onClick={this.handleSearch} id="submitBtn">
                        Search
                        </Button>
                    </Col>
                    </FormGroup>
                </Form> : null }
            </div>
        )
    }
}

export default Search


/*

<div className={"input-group"}>
                <label for="name">Search by name:</label>
                <input type="text" id="name" className={"form-control"} value={this.state.name} onChange={this.handleNameSearch}/>
                
                <label for="age">Search by age:</label>
                <input type="number" id="age" className={"form-control"} value={this.state.age} onChange={this.handleAgeSearch}/>
                
                <label for="zipCode">Search by age:</label>
                <input type="text" id="zipCode" className={"form-control"} value={this.state.zipCode} onChange={this.handleZipCodeSearch}/>
                
                <span className={"input-group-btn"}>
                    <button className={"btn btn-primary"} type="button"onClick={this.handleSearch}>Search</button>
                </span>
            </div>

            */