import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">Home</Link>| |<Link to="/NewAteItemForm">New Entry</Link>
          | |<Link to="/AteList">Entries</Link>
        </h1>
      </nav>
    );
  }
}
