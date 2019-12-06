import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import Nav from "../Nav/Nav";
import AteListItem from "../AteListItem/AteListItem";
import NewItemAteForm from "../NewAteItemForm/NewAteItemForm";
import HomePage from "../HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/registrationform" component={RegistrationForm} />
            <Route path="/loginform" component={LoginForm} />
            <Route path="/AteListItem" component={AteListItem} />
            <Route path="/NewAteItemForm" component={NewItemAteForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
