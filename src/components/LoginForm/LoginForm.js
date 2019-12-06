import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../Utils/Utils";
import "./LoginForm.css";

export default class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <div className="email">
            <label htmlFor="LoginForm_email">Email </label>
            <Input required name="email" id="LoginForm_email"></Input>
            <p></p>
            <label htmlFor="LoginForm_password">Password </label>
            <Input
              required
              name="password"
              type="password"
              id="LoginForm_password"
            ></Input>
          </div>
          <Link to="/AteListItem">Login</Link>
        </form>
      </div>
    );
  }
}
