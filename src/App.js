import React, { Fragment } from "react";
import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Main} />
      </Fragment>
    </Router>
  );
}

export default App;
