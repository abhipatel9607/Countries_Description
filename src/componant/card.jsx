import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardComponant extends Component {
  render() {
    return (
      <Link to={`/country/${this.props.countryDetails.capital}`}>
        <div
          style={{
            borderRadius: "5px",
            width: "240px",
            marginBottom: "50px",
            backgroundColor: "#6c757d",
          }}
        >
          <img
            style={{
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
              width: "240px",
              height: "158px",
            }}
            src={this.props.countryDetails.flag}
            position="top"
            alt="..."
          />
          <div
            className="descreption"
            style={{ width: "240px", height: "158px", marginLeft: "18px" }}
          >
            <span
              style={{
                fontSize: "1.3rem",
                display: "inline-block",
                margin: "16px 0px",
              }}
            >
              {this.props.countryDetails.name}
            </span>

            <div>
              <span style={{ display: "inline-block", marginBottom: "6px" }}>
                Population: {this.props.countryDetails.population}
              </span>
              <br />
              <span style={{ display: "inline-block", marginBottom: "6px" }}>
                Region: {this.props.countryDetails.region}
              </span>
              <br />
              <span style={{ display: "inline-block", marginBottom: "6px" }}>
                Capital: {this.props.countryDetails.capital}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default CardComponant;
