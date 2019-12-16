import React from "react";

export default React.createContext({
  ateList: [],
  toggle: false,
  API: "https://whispering-waters-19074.herokuapp.com/",
  addAteItem: () => {},
  deleteMeal: () => {},
  toggleErrors: () => {},
  throwError: () => {}
});
