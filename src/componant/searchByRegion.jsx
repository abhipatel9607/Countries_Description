import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

class SearchByRegion extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      placeholder: "Search by Region",
    };
  }

  change = (eventkey) => {
    // a.persist();
    this.props.onhandleSearchCountryByRegion(eventkey);
    this.setState({ placeholder: eventkey });
  };

  render() {
    return (
      <div>
        <Dropdown onSelect={this.change}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {this.state.placeholder}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
            <Dropdown.Item eventKey="Americas">Americas</Dropdown.Item>
            <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
            <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
            <Dropdown.Item eventKey="Oceania">Oceania</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default SearchByRegion;
