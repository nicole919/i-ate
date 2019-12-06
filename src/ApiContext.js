import React from "react";

export default React.createContext({
  ateList: [],
  toggle: false,
  API: "http://localhost:9090",
  addAteItem: () => {},
  deleteAteItem: () => {},
  toggleErrors: () => {},
  throwError: () => {}
});
