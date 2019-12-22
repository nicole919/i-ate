import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<HomePage />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
