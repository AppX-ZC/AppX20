import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
