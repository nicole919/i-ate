import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import AteList from "../AteList/AteList";
import NewItemAteForm from "../NewAteItemForm/NewAteItemForm";
import HomePage from "../HomePage/HomePage";
import "./app.css";
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
            <Route path="/AteList" component={AteList} />
            <Route path="/NewAteItemForm" component={NewItemAteForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
