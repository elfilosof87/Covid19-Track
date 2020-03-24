import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import Prepare from "./Components/Prepare";
import Faq from "./Components/Faq";
import Prevent from "./Components/Prevent";
import Footer from "./Components/Footer";
import India from "./Components/India";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/india" component={India} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/prepare" component={Prepare} />
        <Route exact path="/prevent" component={Prevent} />
        <Route exact path="/faq" component={Faq} />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
