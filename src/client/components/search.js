import React, { PropTypes } from 'react';
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel, HelpBlock} from 'react-bootstrap';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', age: 0, zipCode: null}
    }

    static propTypes = {
        applySearch: PropTypes.func.isRequired
    }

    handleNameSearch = (e) => {
        console.log(e.target.value)
        this.setState({name: event.target.value});
    }

    handleAgeSearch = (e) => {
        console.log(e.target.value)
        this.setState({age: event.target.value});
    }

    handleZipCodeSearch = (e) => {
        console.log(e.target.value)
        this.setState({zipCode: event.target.value});
    }

    handleSearch = () => {
        console.log('this.state.value: ', this.state.value)
        this.props.applySearch({name: this.state.name, age: this.state.age, zipCode: this.state.zipCode})
    }

    render() {

        const style = {
            label: {
                color: 'red'
            }
        }
        return (
            <Form horizontal>
                <FormGroup>
                <Col sm={6} smPush={3}>
                    <HelpBlock>Search by name</HelpBlock>
                    <FormControl type="text" value={this.state.name} onChange={this.handleNameSearch}/>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col sm={6} smPush={3}>
                    <HelpBlock style={style.lable}>Search by age</HelpBlock>
                    <FormControl type="number" value={this.state.age} onChange={this.handleAgeSearch}/>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col sm={6} smPush={3}>
                    <HelpBlock style={style.lable}>Search by zipCode</HelpBlock>
                    <FormControl type="text" value={this.state.zipCode} onChange={this.handleZipCodeSearch}/>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col smOffset={1} sm={10}>
                    <Button type="submit">
                    Sign in
                    </Button>
                </Col>
                </FormGroup>
            </Form>
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