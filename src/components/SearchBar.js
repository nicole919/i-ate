import React, { Component } from "react";

export default class SearchBar extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleChange}
          placeholder="search"
        />
      </div>
    );
  }
}
