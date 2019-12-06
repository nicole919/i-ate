import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import { Link } from "react-router-dom";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div className="name">
            <label htmlFor="RegistrationForm_name">
              Name <Required />
            </label>
            <Input
              name="name"
              type="text"
              required
              id="RegistrationForm_name"
            ></Input>
          </div>
          <div className="email">
            <label htmlFor="RegistaionForm_email">
              Email <Required />
            </label>
            <Input
              name="email"
              type="text"
              required
              id="RegistrationForm_email"
            ></Input>
          </div>
          <div className="password">
            <label htmlFor="RegistrationForm_password">
              Password <Required />
            </label>
            <Input
              name="password"
              type="password"
              required
              id="RegistrationForm_password"
            ></Input>
          </div>
          <Link to="/AteListItem">Register</Link>
        </form>
      </div>
    );
  }
}
