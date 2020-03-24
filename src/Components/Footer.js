import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <center>
        <div className="bot">
          <p>
            Created by
            <a href="https://github.com/elfilosof87" target="_blank">
              {" "}
              Maaz Ahmed{" "}
            </a>{" "}
            &{" "}
            <a href="https://github.com/dragneel2000" target="_blank">
              Joel Samson
            </a>
          </p>
        </div>
      </center>
    );
  }
}
