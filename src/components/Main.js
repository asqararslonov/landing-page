import React from "react";
import Man from "./img/man.png";
import First from "./img/icons/first.png";
import Second from "./img/icons/second.png";
import Third from "./img/icons/third.png";
import Fourth from "./img/icons/fourth.png";
import Fifth from "./img/icons/fifth.png";
import Sixth from "./img/icons/sixth.png";
import Aos from 'aos';
import  'aos/dist/aos.css';
const Main = () => {
    Aos.init({duration: 1100})
 
  return (
    <main>
      <section id="about" className="pt-5 ds">
        <div className="container w-75">
          <div className="d-flex flex w-76">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='100'
     >
              <p>1,087</p> <span>Number of Projects</span>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='250'>
              <p>57</p> <span>Year of Experience</span>
            </div > 
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='700'>
              <p>670</p> <span>Number of Employees</span>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='1000'>
              <p>900</p> <span>Number of Clients</span>
            </div>
          </div>
          <div className="about salom w-76">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='100'>
              <img src={Man} alt={"Man"} />
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='400'>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <br />

              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <button className="btn mt-4 p-4  pl-4 pr-4 pt-2 pb-2 rounded-pill btn-primary">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="container w-78">
        <div className="servise">
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='100'>
            <p>OUR SERVICES</p>
            <hr />
          </div>

          <b>
            <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='300'>
              Far far away, behind the word mountains, far from the countries
            </h2>
          </b>
        </div>
        <div className="d-flex div-flex">
          {/* <div className='first d-flex'> */}
          <div className="item" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='200'>
            <img src={First} alt="not found" />
            <b>Construction Consultation</b>
            <p className="lead">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics.
            </p>
            <a href="#home" className="btn btn-link">
              Learn More
            </a>
          </div>
          <div className="item" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='400'>
            <img src={Second} alt="not found" />
            <b>House Renovation</b>
            <p className="lead">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics.
            </p>
            <a href="#home" className="btn btn-link">
              Learn More
            </a>
          </div>
          <div className="item" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='600'>
            <img src={Third} alt="not found" />
            <b>Planning</b>
            <p className="lead">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics.
            </p>
            <a href="#home" className="btn btn-link">
              Learn More
            </a>
          </div>
          <div className="item" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='800'>
            <img src={Fourth} alt="not found" />
            <b>Interior Design</b>
            <p className="lead">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics.
            </p>
            <a href="#home" className="btn btn-link">
              Learn More
            </a>
          </div>
          <div className="item" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='1000'>
            <img src={Fifth} alt="not found" />
            <b>Architecture</b>
            <p className="lead">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics.
            </p>
            <a href="#home" className="btn btn-link">
              Learn More
            </a>
          </div>
          <div className="item" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='1200'>
            <img src={Sixth} alt="not found" />
            <b>Installation Works</b>
            <p className="lead">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics.
            </p>
            <a  href="#work" className="btn btn-link">
              Learn More
            </a>
          </div>
        </div>
        <a href='#work' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='800' className="btn mt-4 p-4 pl-4 pr-4 pt-2 pb-2 rounded-pill btn-primary">Our services</a>
        <br />
        <br />
        <br />
        {/* </div>vb */}
      </section>
    </main>
  );
  };
export default Main;

