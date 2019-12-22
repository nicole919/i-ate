import React from "react";
import ReactDOM from "react-dom";
import AteListItem from "./AteListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AteListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
