import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>i.ate</h1>
        </header>

        <section>
          <h3>A food journal without the guilt. </h3>
          <p>No calories, no goals, just food.</p>
        </section>

        <section>
          <h3>
            Can't remember what you ate at that one restaurant you went to 3
            months ago?
          </h3>
          <p>
            Quickly add your meals out with i.ate so you have a place to
            reference where and what you had (and if you liked it!).
          </p>
        </section>

        <section>
          <h3>So, where did you eat?</h3>
          <p>i.ate is currently in beta mode</p>
          <Link to="/NewAteItemForm">Create an Entry</Link>| |
          <Link to="/AteList">View entries</Link>
        </section>
      </div>
    );
  }
}
