import React, { Component } from "react";
import Cards from "./componant/cards";
import { MDBCol } from "mdbreact";
import InputComponent from "./componant/input";
import SearchByRegion from "./componant/searchByRegion";

class Home extends Component {
  state = {
    countries: [],
  };

  fetchAllCountries = () => {
    fetch(`https://restcountries.com/v2/all`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ countries: response });
      });
  };

  componentDidMount() {
    this.fetchAllCountries();
  }
  add = (event, value) => {
    if (event.key === "Enter" && value) {
      let searchInput = value;
      fetch(`https://restcountries.com/v2/name/${searchInput}`)
        .then((response) => response.json())
        .then((response) => {
          this.setState({ countries: response });
        });
    } else {
      this.fetchAllCountries();
    }
  };

  handleSearchCountryByRegion = (region) => {
    fetch(`https://restcountries.com/v2/region/${region}`)
      .then((response) => response.json())
      .then((countryDetails) => {
        this.setState({ countries: [] });
        this.setState({ countries: countryDetails });
      });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#495057" }}>
        <MDBCol md="6">
          <div
            style={{
              padding: "50px",
              margin: "0 auto",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100vw",
            }}
            className="active-pink-3 active-pink-4 mb-4"
          >
            <InputComponent add={this.add} />
            <SearchByRegion
              onhandleSearchCountryByRegion={this.handleSearchCountryByRegion}
            />
          </div>
        </MDBCol>
        <Cards cards={this.state.countries} search={this.state.input} />
      </div>
    );
  }
}

export default Home;
