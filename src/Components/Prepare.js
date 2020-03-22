import React, { Component, Fragment } from "react";
import img1 from "./images/question.jpg";

export default class Prepare extends Component {
  render() {
    return (
      <Fragment>
        <div className="back">
          <center>
            <h1 class="covid-text marg-top">
              How to prepare
              <span>
                <img src={img1} alt="" class="question" />
              </span>
            </h1>

            <div class="prep">
              <div class="prep-para">
                <div class="prep-cover">
                  <h2>
                    <i class="far fa-check-circle"></i> Find Local Information
                  </h2>
                  <span>
                    Know where to find local information on COVID-19 and local
                    trends of COVID-19 cases.
                  </span>
                </div>
              </div>

              <div class="prep-para">
                <div class="prep-cover">
                  <h2>
                    <i class="far fa-check-circle"></i> Know the Signs &
                    Symptoms
                  </h2>
                  <span class="prep-sp">
                    Know the signs and symptoms of COVID-19 and what to do if
                    symptomatic:
                    <ul>
                      <li>Stay home when you are sick</li>
                      <li>
                        Call your health care provider’s office in advance of a
                        visit
                      </li>
                      <li>Limit movement in the community</li>
                      <li>Limit visitors</li>
                    </ul>
                  </span>
                </div>
              </div>

              <div class="prep-para">
                <div class="prep-cover">
                  <h2>
                    <i class="far fa-check-circle"></i> Take Steps for Those at
                    Higher Risk
                  </h2>
                  <span>
                    Know what additional measures those at higher risk and who
                    are vulnerable should take.
                  </span>
                </div>
              </div>

              <div class="prep-para">
                <div class="prep-cover">
                  <h2>
                    <i class="far fa-check-circle"></i> Protect Yourself &
                    Family
                  </h2>
                  <span>
                    Implement steps to prevent illness (e.g., stay home when
                    sick, handwashing,
                    <br />
                    respiratory etiquette, clean frequently touched surfaces
                    daily).
                  </span>
                </div>
              </div>

              <div class="prep-para">
                <div class="prep-cover">
                  <h2>
                    <i class="far fa-check-circle"></i> Know the Signs &
                    Symptoms
                  </h2>
                  <span class="prep-sp">
                    Create a household plan of action in case of illness in the
                    household
                    <br />
                    or disruption of daily activities due to COVID-19 in the
                    community.
                    <ul>
                      <li>
                        Consider 2-week supply of prescription and over
                        <br />
                        the counter medications, food and other essentials.{" "}
                        <br />
                        Know how to get food delivered if possible.
                      </li>
                      <li>
                        Establish ways to communicate with others (e.g., family,
                        friends).
                      </li>
                      <li>
                        Establish plans to telework, what to do about childcare{" "}
                        <br />
                        needs, how to adapt to cancellation of events.
                      </li>
                    </ul>
                  </span>
                </div>
              </div>

              <div class="prep-para">
                <div class="prep-cover">
                  <h2>
                    <i class="far fa-check-circle"></i> Stay Informed About
                    Emergency Plans
                  </h2>
                  <span>
                    Know about emergency operations plans for schools/workplaces
                    of household members.
                  </span>
                </div>
              </div>
            </div>
          </center>
        </div>
      </Fragment>
    );
  }
}
