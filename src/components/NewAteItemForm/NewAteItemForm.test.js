import React from "react";
import ReactDOM from "react-dom";
import NewItemAteForm from "./NewAteItemForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewItemAteForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
