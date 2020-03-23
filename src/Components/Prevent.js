import React, { Component, Fragment } from "react";
import sneeze from "./images/sneeze.png";
import clean from "./images/clean.png";
import houese from "./images/houese.png";
import sick from "./images/sick.png";
import cough from "./images/cough.png";
import mask from "./images/mask.png";
import dis from "./images/dis.png";

export default class Prevent extends Component {
  render() {
    return (
      <Fragment>
        <div className="back">
          <center>
            <h1 className="covid-text">How to protect yourself</h1>

            <div className="prep">
              <div className="prep-cover">
                <h1>1. Know How it Spreads</h1>
                <div className="tips-con">
                  <div>
                    <img src={sneeze} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <ul style={{ display: "block" }}>
                      <li>
                        At the moment there are no vaccines or medicine to cure
                        it so it is better to avoid it.
                      </li>
                      <li>
                        Rather than taking risk better to take all the necessary
                        precautions given bellow
                      </li>
                      <li>
                        As of now the the virus spreads from person to person
                      </li>
                      <ul>
                        <li>
                          Between people who are in close contact with one
                          another (within about 6 feet).
                        </li>
                        <li>
                          Through respiratory droplets produced when an infected
                          person coughs or sneezes.
                        </li>
                        <li>
                          These droplets can land in the mouths or noses of
                          people who are nearby or possibly be inhaled into the
                          lungs.
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="prep-cover">
                <h1>2. Protect yourself</h1>
                <div className="tips-con">
                  <div>
                    <img src={clean} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <ul>
                      <h4>Clean your hands every 1 hour</h4>
                      <li>
                        Wash your hands often with soap and water for at least
                        20 seconds especially after you have been in a public
                        place, or after blowing your nose, coughing, or
                        sneezing.
                      </li>
                      <li>
                        If soap and water are not readily available, use a hand
                        sanitizer that contains at least 60% alcohol. Cover all
                        surfaces of your hands and rub them together until they
                        feel dry.
                      </li>
                      <li>
                        Avoid touching your eyes, nose, and mouth with unwashed
                        hands.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="tips-con">
                  <div>
                    <img src={houese} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <h3>Avoid Close contact</h3>
                    <ul>
                      <li>Avoid close contact with people who are sick</li>
                      <li>Put distance between yourself and other people</li>
                      <li>
                        Especially if the virus is spreading in your community
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="prep-cover">
                <h1>3. Take steps to protect others</h1>
                <div className="tips-con">
                  <div>
                    <img src={sick} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <h3>Stay at home if sick</h3>
                    <ul>
                      <li>
                        If you are not well,have a slight fever or cold it would
                        be best to stay at home to prevent risk of infecting
                        others
                      </li>
                      <li>Seek medical care if needed</li>
                    </ul>
                  </div>
                </div>

                <div className="tips-con">
                  <div>
                    <img src={cough} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <h3>Cover coughs and sneezes</h3>
                    <ul>
                      <li>
                        Cover your mouth and nose with a tissue when you cough
                        or sneeze or use the inside of your elbow.
                      </li>
                      <li>
                        Dispose oif used tissues immediateley.If masks are used
                        discard after the days use
                      </li>
                      <li>
                        Always wash your hands after you cough with soap and
                        water for 20 secs
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="tips-con">
                  <div>
                    <img src={mask} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <h3>Wear a facemask if you are sick</h3>
                    <ul>
                      <li>Wear a mask if you are sick to prevent spreading</li>
                      <li>Preferably masks of type N-95</li>
                      <li>
                        cover your mouth with a shawl if masks are not available
                        As masks are of low supply
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="prep-cover">
                <h1>Clean and disinfect</h1>
                <div className="tips-con">
                  <div>
                    <img src={dis} alt="" style={{ display: "block" }} />
                  </div>
                  <div>
                    <ul>
                      <li>
                        Clean AND disinfect frequently touched surfaces daily.
                        This includes tables, doorknobs, light switches,
                        countertops, handles, desks, phones, keyboards, toilets,
                        faucets, and sinks.
                      </li>
                      <li>
                        If surfaces are dirty, clean them: Use detergent or soap
                        and water prior to disinfection.
                      </li>
                      <li>
                        Always wash your hands after you cough with soap and
                        water for 20 secs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <iframe
                title="vid-1"
                width="768"
                height="480"
                src="https://www.youtube.com/watch?time_continue=184&v=4OhvJ4wi034&feature=emb_logo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </center>
        </div>
      </Fragment>
    );
  }
}
