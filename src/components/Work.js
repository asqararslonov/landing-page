import React from "react";
import First from "./img/first.png";
import Second from "./img/second.png";
import Third from "./img/third.png";
import Fourth from "./img/fourth.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Work = () => {
  Aos.init({ duration: 1000 });
  return (
    <section id="work">
      <div
        className="title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="300"
      >
        <h1>Blog Posts</h1>
        <p>
          Separated they live in. Separated they live in Bookmarksgrove right at
          the coast of the Semantics, a large language ocean.
        </p>
      </div>
      <div className="flex-group">
        <div
          className="flex-box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
        >
          <div className="img" with="250px">
            <img with="250px" src={Third} alt="uzr topilmadi" />{" "}
          </div>
          <b className="mt-3">Separated they live in</b>
          <p>

            Aug 4, 2020 by <span>Admin</span> in <span>Architect</span>
          </p>
        </div>
        <div
          className="flex-box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="700"
        >
          <div className="img" with="250px">
            <img with="250px" src={Fourth} alt="uzr topilmadi" />{" "}
          </div>
          <b className="mt-3">Separated they live in</b>
          <p>
            Aug 4, 2020 by <span>Admin</span> in <span>Architect</span>
          </p>
        </div>
        <div
          className="flex-box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="900"
        >
          <div className="img" with="250px">
            <img with="250px" src={Second} alt="uzr topilmadi" />{" "}
          </div>
          <b className="mt-3">Separated they live in</b>
          <p>
            Aug 4, 2020 by <span>Admin</span> in <span>Architect</span>
          </p>
        </div>
        <div
          className="flex-box"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="1100"
        >
          
          <div className="img" with="250px">
            <img
              with="250px"
              height={"256px"}
              src={First}
              alt="uzr topilmadi"
            />{" "}
          </div>
          <b className="mt-3">Separated they live in</b>
          <p>
            Aug 4, 2020 by <span>Admin</span> in <span>Architect</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
