import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <center>
        <div className="bot">
          <p>
            Created by
            <Link to="https://github.com/elfilosof87"> Maaz Ahmed</Link>
          </p>
        </div>
      </center>
    );
  }
}
