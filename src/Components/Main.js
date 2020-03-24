import React, { Component, Fragment } from "react";

export default class main extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <h1 class="covid-text-map">Covid-19 Statistics and Information</h1>
          <div className="iclass1">
            <iframe
              title="frame1"
              src="https://public.domo.com/cards/bWxVg"
              width="80%"
              height="100%"
              marginheight="0"
              marginwidth="0"
              frameborder="0"
            ></iframe>
          </div>
        </center>
      </Fragment>
    );
  }
}
