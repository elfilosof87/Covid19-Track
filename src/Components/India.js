import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class main extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <h1 className="covid-text-map">
            Covid-19 Statistics and Information
          </h1>
          <div className="iclass">
            <iframe
              title="map"
              scrolling="no"
              width="80%"
              height="100%"
              frameBorder="0"
              src="https://public.flourish.studio/visualisation/1538247/embed?auto=1"
            ></iframe>
          </div>
        </center>
      </Fragment>
    );
  }
}
