import React from "react";
import Bar from "./img/bar-icon.jpg";
import Aos from "aos";
import bg from './img/first.png'
import "aos/dist/aos.css";

const Header = () => {
  Aos.init({ duration: 90/0 });
  const margin= {
marginLeft: "10px"
  }
  return (
    <div className="heaader123">
      <div>
        <header className="container" id="home">
          {/* bar<div className='container'> */}
          <nav>
            <img className='bg'src={bg} alt={bg} />
            <div className="logo">
              <a href="#home">
                <h4>
                  <span>Re</span>
                  <strong>shape</strong>
                </h4>
              </a>
            </div>
            <img src={Bar} className="bar" alt="bar" />
            <ul>
              <li>
                <p>
                  <a href="#home">Home</a>
                </p>
              </li>
              <li>
                <a href="#about">
                  <select>
                    <option>About</option>
                    <option>Elements</option>
                  </select>
                </a>
              </li>
              <li>
                <a href="#services">Our services</a>
              </li>
              <li>
                <a href="#work">How we work?</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className={"left"}>
            <p
              className="lead"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"

            >
              Separated they live in. Separated they live in <br />{" "}
              Bookmarksgrove right at the coast of the
              <br /> Semantics, a large language ocean.
            </p>
            <h1
              className={"display-4"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="200"
            >
              We are Re<b>shape</b>,<br /> and{" "}
              <b>
                we shape
                <br /> buildings.{" "}
              </b>
            </h1>
            <a
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay='600'
              href="#about"
              className="btn mr-5 mt-4 p-4  pt-2 pb-2 rounded-pill btn-primary"
            >
              About Us
            </a>
            <a
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay='600'
              href="#services"
              style={margin}
              className="btn ml-4 mt-4 p-4 pt-2 pb-2 rounded-pill btn-dark"
            >
              Our services
            </a>
          </div>
          {/* </div> */}
        </header>
      </div>
    </div>
  );
};
export default Header;
