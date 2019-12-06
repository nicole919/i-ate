import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getEntries } from "../../ateItems-helpers";
import "./AteListItem.css";

export default class AteListItem extends Component {
  render() {
    const { ateList } = this.context;
    console.log(ateList);
    const entriesForList = getEntries(ateList);

    return (
      <div className="AteListItem">
        <h1 className="AteListItem_header">i.ate</h1>
        <Link to="/NewAteItemForm">New entry</Link>
        <section>
          <h3>Sauce</h3>
          <p>12.06.2019</p>
          <p>I ate pesto pizza, drank pinot noir, and it was good. </p>
        </section>
        <section>
          <h3>Eleven Cafe</h3>
          <p>12.04.2019</p>
          <p>I drank ca phe sua, and it was amazing! </p>
        </section>
        <section>
          <h3>Luke's</h3>
          <p>11.15.2019</p>
          <p>
            I ate cheesesteak sandwich, and it was not good. Note: Next time try
            the pastrami sandwich Olivia got.
          </p>
        </section>
        <section>
          <h3>Taco Party Place</h3>
          <p>10.23.2019</p>
          <p>In San Diego, I ate shrimp tacos, and it was amazing! </p>
        </section>
        <section>
          <h3>Dino's</h3>
          <p>10.09.2019</p>
          <p>
            I ate turkey feta salad, and macaroni and cheese, and it was okay.{" "}
          </p>
        </section>
      </div>
    );
  }
}
