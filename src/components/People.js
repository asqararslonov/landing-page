import React from 'react';
import First from './img/Man/first.png';
import Second from './img/Man/second.png';
import Third from './img/Man/third.png';
import Aos from'aos';
import  'aos/dist/aos.css';
const People = () => {
    Aos.init({duration: 1000})
    return (
        <section className='Name'>
            <div>
                <div className='group container d-flex'>
                <div className='box'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='200'>
            <img src={First} alt='Man' />
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <em>James Anderson</em>
                </div>
              
                <div className='box'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='400'>
            <img src={Second} alt='Man' />
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <em>James Anderson</em>
                </div>
           
                <div className='box' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='600'>
            <img src={Third} alt='Man' />
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <em>James Anderson</em>
                </div>
              </div>
              
      </div>
        </section>
    )
}
 
export default People;