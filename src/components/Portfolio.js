import React from 'react';
import Ban from "./img/first.png";
import Left from './img/icons/left.png'
import Right from './img/icons/right.png'
import Aos from 'aos';
import  'aos/dist/aos.css';

const Portfolio = () => {
    Aos.init({duration: 1000}
    )
    return (
        <section id='portfolio'>
            <div className='main w-100'>
                <div className='cont'>
                    <div className='left1  w-25' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" 
     data-aos-delay='200'>
                        <span>PORTFOLIO</span>
                        <h4>Project Title One</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <br />
                        <button type="button" className="btn btn-primary btn-lg btn-block">See case study</button>

                        <div className='d-flex mt-5'>
                            <div className=' icon'>
                                <img src={Left} alt='img' />
                                <img src={Right} alt='img' />
                            </div>
                                <p className='mt-5 pl-5 text-right p'> 1/ 4</p>
                            {/* <div className='mt-5'>
                            </div> */}
                        </div>

                    </div>
                    <div className='right'>
                        <img src={Ban} alt='img' width='300px' />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Portfolio;