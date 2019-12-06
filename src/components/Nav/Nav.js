import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export default class Header extends Component {
  //handleLogoutClick () => {}
  //renderLogoutLink() {}
  //renderLoginLink()

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">i.ate</Link>| |
          <Link to="/registrationform">Sign up</Link>| |
          <Link to="/loginform">Login</Link>
        </h1>
        {/*tokenService ternary logout/login*/}
      </nav>
    );
  }
}
