import React, {useEffect } from "react";
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import img1 from '../../images/insta-1.webp'
import img2 from '../../images/insta-2.webp'
import img3 from '../../images/insta-3.webp'
import img4 from '../../images/insta-4.webp'
import img5 from '../../images/insta-5.webp'
import img6 from '../../images/insta-6.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return (
        <div className="footer" id="contact">
            <div className="head">
                <h1>We Make Delicious & Nutritious Food</h1>
                <button>Book A Table Now</button>
            </div>
            <div className="dtl-footer">
                <div className="item-ftr">
                    <h2>Taste.it</h2>

                    <div className='inf-item'>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                      <div className="icons" >
                          <div className="icon">
                             <BsTwitter />
                          </div>
                          <div className="icon">
                             <GrFacebookOption />
                          </div>
                          <div className="icon">
                             <FiInstagram />
                          </div>
                          
                      </div>
                    </div>

                </div>
                <div className="item-ftr">
                    <h2>Open Hours</h2>

                    <div className='inf-item'>
                      <li>Monday <span>9:00 - 24:00</span></li>
                      <li>Tuesday <span>9:00 - 24:00</span></li>
                      <li>Wednesday <span>9:00 - 24:00</span></li>
                      <li>Thursday <span>9:00 - 24:00</span></li>
                      <li>Friday <span>9:00 - 24:00</span></li>
                      <li>Saturday <span>9:00 - 24:00</span></li>
                      <li>Sunday <span>Closed</span></li>
                    </div>

                </div>

                <div className="item-ftr">
                    <h2>Instagram</h2>

                    <div className='inf-item'>
                      <div className="photo">

                          <img src={img1} />
                          <img src={img2} />
                          <img src={img3} />
                          <img src={img4} />
                          <img src={img5} />
                          <img src={img6} />
                          
                      </div>
                    </div>

                </div>

                <div className="item-ftr">
                    <h2>Newsletter</h2>

                    <div className='inf-item'>
                      <p>Far far away, behind the word mountains, far from the countries.</p>
                      <input placeholder="Enter email address"/>
                      <button>Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
