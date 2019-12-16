import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SpeechBubble } from "react-kawaii";
import Heart from "../../heart.svg";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header role="banner" className="i-ate-banner">
          <div class="image">
            <h1 className="header-title">i.ate</h1>
          </div>
        </header>
        <div className="sectionContainer">
          <section className="first-section">
            <h3>A food journal without the guilt. </h3>
            <p>No calories, no goals, just food.</p>
          </section>

          <section className="second-section">
            <h3>
              Can't remember what you ate at that one restaurant you went to 3
              months ago?
            </h3>
            <p>
              Quickly add your meals out with i.ate so you have a place to
              reference where and what you had (and if you liked it!).
            </p>
          </section>

          <section className="third-section">
            <h3>So, where did you eat?</h3>
            <SpeechBubble size={120} mood="blissful" color="#83D1FB" />
            <span className="where">
              <Link to="/NewAteItemForm">Create an Entry</Link>
            </span>
            <span className="where">
              <Link to="/AteList">View entries</Link>
            </span>
          </section>
        </div>
        <footer>
          {/* <div
            class="fb-share-button"
            data-href="https://i-ate.nicolefafard.now.sh/"
            data-layout="button_count"
          ></div> */}
          <p className="footerText">i.ate is currently in beta mode</p>
          <p>
            Created with <img className="heart" src={Heart} alt="heart" /> by{" "}
            <a href="https://nicole919.github.io/portfolio">Nicole</a>
          </p>
        </footer>
      </div>
    );
  }
}
