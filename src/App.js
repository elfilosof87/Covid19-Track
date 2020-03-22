import React, { Fragment } from "react";
import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import Prepare from "./Components/Prepare";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/prepare" component={Prepare} />
      </Fragment>
    </Router>
  );
}

export default App;
