import React from "react";

export default React.createContext({
  ateList: [],
  toggle: false,
  API: "http://localhost:8000",
  addAteItem: () => {},
  deleteMeal: () => {},
  toggleErrors: () => {},
  throwError: () => {}
});
