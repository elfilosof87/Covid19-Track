import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../main";

const Navbar = () => {
  const [switchNav, toggleNav] = useState(true);
  if (!switchNav) {
    var nav1 = "covid-nav covid-nav-black visible";
    var nav2 = "covid-nav covid-nav-red visible ";
    var nav3 = "covid-nav covid-nav-white visible";
    var nav4 = "covid-nav-btn covid-close-btn visible";
  } else {
    nav1 = "covid-nav covid-nav-black ";
    nav2 = "covid-nav covid-nav-red ";
    nav3 = "covid-nav covid-nav-white";
    nav4 = "covid-nav-btn covid-close-btn ";
  }

  return (
    <Fragment>
      <button
        className="covid-nav-btn covid-open-btn"
        onClick={() => toggleNav(!switchNav)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className={nav1}>
        <div className={nav2}>
          <div className={nav3}>
            <button className={nav4} onClick={() => toggleNav(!switchNav)}>
              <i className="fas fa-times"></i>
            </button>

            <img
              className="covid-logo"
              src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1581911979/sas/wjpdipgnemywcwaq6hrx/COVID-19-webpage-logo.png"
              alt="covidLogo"
            />

            <ul className="covid-list">
              <li>
                <Link to="/">World Live Map</Link>
              </li>
              <li>
                <Link to="/india">India Live Map</Link>
              </li>
              <li>
                <Link to="/advanced">Global Statistics</Link>
              </li>
              <li>
                <Link to="/news">Covid-19 News</Link>
              </li>
              <li>
                <Link to="/beds">Hospital Data</Link>
              </li>
              <li>
                <Link to="/prepare">Prepare</Link>
              </li>

              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
