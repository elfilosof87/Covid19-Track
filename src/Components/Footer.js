import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <center>
        <div className="bot">
          <p>
            Created with <i class="fa fa-heart"></i> by
            <Link to="/">Maaz Ahmed</Link>
          </p>
        </div>
      </center>
    );
  }
}
