import React from "react";
import ReactDOM from "react-dom";
import AteList from "./AteList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AteList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
