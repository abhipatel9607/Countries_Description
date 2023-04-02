import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./countryDetail.css";

class CountryDetail extends Component {
  state = { country: "" };

  componentDidMount() {
    fetch(
      `https://restcountries.com/v2/capital/${this.props.match.params.capital}`
    )
      .then((countryData) => countryData.json())
      .then((countryData) => {
        this.setState({
          country: countryData[0],
        });
      });
  }

  getCurrencies = () => {
    let str = "";
    if (this.state.country.currencies) {
      this.state.country.currencies.map((obj) => {
        // str = str.concat(obj.name + ", ");
        str = str + obj.name + ", ";
      });
    }
    return str;
  };
  getLanguages = () => {
    let str = "";
    if (this.state.country.languages) {
      this.state.country.languages.map((obj) => {
        str = str.concat(obj.name + ", ");
      });
    }
    return str;
  };
  getBorders = () => {
    let arr = [];
    if (this.state.country.borders) {
      this.state.country.borders.forEach((el, i) => {
        arr.push(
          <span key={i + 1} className="border-name">
            {el}
          </span>
        );
      });
    }
    return arr;
  };

  render() {
    console.log(this.state.country);
    this.getBorders();
    return (
      <div
        style={{
          width: "90vw",
          margin: "70px auto",
          //   backgroundColor: "#787276",
        }}
      >
        <Link to={`/`}>
          <button
            style={{
              fontSize: "16px",
              padding: "4px 14px",
              border: "none",
              backgroundColor: "#a7a7a7",
              borderRadius: "5px",
              color: "white",
            }}
          >
            &#x2190; Back
          </button>
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "70px",
          }}
        >
          <div style={{ width: "40vw" }}>
            {/* <h1>div 01</h1> */}
            <img
              src={this.state && this.state.country && this.state.country.flag}
              alt="CountryFlag"
              width={"100%"}
            />
          </div>
          <div
            style={{
              width: "45vw",
              display: "flex",
              flexDirection: "column",
              gap: "6vh",
            }}
          >
            <div>
              <h1 style={{ fontSize: "34px", marginBottom: "5vh" }}>
                {this.state.country.name}
              </h1>
              <div style={{ display: "flex", gap: "5vw" }}>
                <div style={{ width: "20vw" }}>
                  <span className="details-subhead">
                    Native Name:{" "}
                    <span className="data">
                      {this.state.country.nativeName}
                    </span>
                  </span>
                  <span className="details-subhead">
                    Population:{" "}
                    <span className="data">
                      {this.state.country.population}
                    </span>
                  </span>
                  <span className="details-subhead">
                    Region:{" "}
                    <span className="data">{this.state.country.region}</span>
                  </span>
                  <span className="details-subhead">
                    Sub Region:{" "}
                    <span className="data">{this.state.country.subregion}</span>
                  </span>
                  <span className="details-subhead">
                    Capital:{" "}
                    <span className="data">{this.state.country.capital}</span>
                  </span>
                </div>
                <div style={{ width: "20vw" }}>
                  <span className="details-subhead">
                    Top Level Domain:{" "}
                    <span className="data">
                      {this.state.country.topLevelDomain}
                    </span>
                  </span>
                  <span className="details-subhead">
                    Currencies:{" "}
                    <span className="data">{this.getCurrencies()}</span>
                  </span>
                  <span className="details-subhead">
                    Languages:{" "}
                    <span className="data">{this.getLanguages()}</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="details-subhead">
                {/* Border Countries: <span className="border-name">Nepal</span>{" "} */}
                {/* Border Countries: {this.getBorders()} */}
                Border Countries: {this.getBorders()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
