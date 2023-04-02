import React, { Component } from "react";
import CardComponant from "./card";

const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );

class Cards extends Component {
  render() {
    console.log(this.props.cards);
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1.3fr 1.3fr 1fr",
          padding: "0",
          margin: "0 auto",
          width: "92vw",
          backgroundColor: "#495057",
        }}
        className="continer"
      >
        {this.props.cards.map((country) => (
          <CardComponant key={uid()} countryDetails={country} />
        ))}
      </div>
    );
  }
}

export default Cards;
