import React, { Component, Fragment } from "react";
import sym1 from "./images/sym11.png";
import sym2 from "./images/sym22.png";
import sym3 from "./images/sym33.png";

export default class Info extends Component {
  render() {
    return (
      <Fragment>
        <div className="back">
          <div class="main">
            <h1 className="marg-top">Covid-19</h1>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a new virus. The disease was first identified in 2019 in Wuhan,
              China, and has since spread globally, resulting in the 2019–20
              coronavirus pandemic.
              <br />
              The disease causes respiratory illness (like the flu) with
              symptoms such as a cough, fever, and in more severe cases,
              difficulty breathing. You can protect yourself by washing your
              hands frequently, avoiding touching your face, and avoiding close
              contact with people who are unwell.
              <br />
              Coronavirus disease spreads primarily through contact with an
              infected person when they cough or sneeze. It also spreads when a
              person touches a surface or object that has the virus on it, then
              touches their eyes, nose, or mouth.
              <br />
              The World Health Organization (WHO) declared the 2019–20
              coronavirus outbreak a pandemic and a Public Health Emergency of
              International Concern (PHEIC).Evidence of local transmission of
              the disease has been found in many countries across all six WHO
              regions.
            </p>
            <hr />
            <h1>Signs symptoms</h1>
            <p>
              Watch for symptoms Reported illnesses have ranged from mild
              symptoms to severe illness and death for confirmed coronavirus
              disease 2019 (COVID-19) cases. The following symptoms may appear
              2-14 days after exposure.*
            </p>
            <div class="img-grid" id="white">
              <div>
                <img alt="sick" src={sym1} class="img-fluid" />
                <li>Fever</li>
              </div>
              <div>
                <img src={sym2} alt="" class="img-fluid" />
                <li>Cough</li>
              </div>
              <div>
                <img src={sym3} alt="" class="img-fluid" />
                <li>Shortness of breath</li>
              </div>
            </div>
            <p>Other symptoms can include:</p>
            <ul>
              <li>Tiredness</li>
              <li>Aches</li>
              <li>Runny nose</li>
              <li>Sore throat</li>
            </ul>

            <p>
              The severity of COVID-19 symptoms can range from very mild to
              severe. Some people have no symptoms. People who are older or have
              existing chronic medical conditions, such as heart or lung disease
              or diabetes, may be at higher risk of serious illness. This is
              similar to what is seen with other respiratory illnesses, such as
              influenza.
            </p>

            <h1>Causes</h1>
            <p>
              It's unclear exactly how contagious the new coronavirus is. It
              appears to spread from person to person among those in close
              contact. It may be spread by respiratory droplets released when
              someone with the virus coughs or sneezes. <br />
              It may also be spread if a person touches a surface with the virus
              on it and then touches his or her mouth, nose or eyes.
            </p>

            <h1>Effects</h1>

            <ul>
              <li>Pneumonia in both lungs</li>
              <li>Organ failure in several organs</li>
              <li>Death</li>
            </ul>

            <h2>For more information refer to the videos below:</h2>
            <center>
              <div class="vid-space">
                <div class="vid-pad" id="white">
                  <center>
                    <iframe
                      title="vid1"
                      width="auto"
                      height="auto"
                      src="https://www.youtube.com/embed/4OhvJ4wi034"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </center>
                </div>
              </div>

              <div class="vid-space">
                <div class="vid-pad" id="white">
                  <center>
                    <iframe
                      title="vid2"
                      width="auto"
                      height="auto"
                      src="https://www.youtube.com/embed/BtN-goy9VOY"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </center>
                </div>
              </div>

              <div class="vid-space">
                <div class="vid-pad" id="white">
                  <center>
                    <iframe
                      title="vid3"
                      width="auto"
                      height="auto"
                      src="https://www.youtube.com/embed/h9d86ocFlxE"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </center>
                </div>
              </div>
            </center>
          </div>
        </div>
      </Fragment>
    );
  }
}
