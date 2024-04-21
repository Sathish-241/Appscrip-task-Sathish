import React from 'react';
import { FaFlagUsa } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiDiamondFill } from "react-icons/pi";
import { VscChevronDown } from "react-icons/vsc";

import './index.css'

const Footer=()=>(
    <div className='footer-section-container'>
        <div className='footer-upper-section-container'>
            <div className='subscribe-section'>
                <div>
                    <h5 className='first-title'>BE THE FIRST TO KNOW</h5>
                    <p className='sign-up-content'>Sign up fot updates from metta muse.</p>
                </div>                
                <div className='email-input-continer'>
                    <input type='text' className='email-input' placeholder='Enter your e-mail... ' />
                    <button type='button' className='subscribe-btn'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='contact-section'>
                <h5>CONTACT US</h5>
                <p className='ph-no'>+44 221 133 5360</p>
                <p className='customer-care'>Customercare@mettamuse.com</p>
                <h5>CURRENCY</h5>
                <div className='currency-container'>
                    <FaFlagUsa  className='us-flag-icon'/>
                    <h5><span><PiDiamondFill className='diamond-icon'/></span>USD</h5>
                </div>
                <p className='trans-content'>Transaction will be completed in Euros and a currency reference is availabe on hover.</p>
                 
            </div>

        </div>
        <div className='footer-bottom-section-container'>
            <div className='metta-muse-container'>
                <h5>Metta muse</h5>
                <p className='company-routes'>About Us</p>
                <p className='company-routes'>stories</p>
                <p className='company-routes'>Artisions</p>
                <p className='company-routes'>Botiques</p>
                <p className='company-routes'>Contact Us</p>
                <p className='company-routes'>EU companies Docs</p>




            </div>
            <div className='quick-links-container'>
                <h5>QUICK LINKS</h5>
                <p className='link-routes'>Orders & Shipping</p>
                <p className='link-routes'>Join/Login as a Seller</p>
                <p className='link-routes'>payment & Pricing</p>
                <p className='link-routes'>Returns & Refunds</p>
                <p className='link-routes'>FAQs</p>
                <p className='link-routes'>Privacy Policy</p>
                <p className='link-routes'>Terms & conditions</p>




            </div>
            <div className='social-media-platform-links'>
                <h5>FOLLOW US</h5>
                <FaInstagram className='platform-logo' />
                <CiLinkedin className='platform-logo' />

            </div>
        </div>
    
     {/* for mobile view */}
     <div className='mobile-view-container'>
        <div className='subsc-cont'>
            <h5 className='first-title'>BE THE FIRST TO KNOW</h5>
            <p className='sign-up-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <div className='email-input-continer'>
                    <input type='text' className='email-input' placeholder='Enter your e-mail... ' />
                    <button type='button' className='subscribe-btn'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='contact-container'>
            <h5>CALL US</h5>
            <p className='ph-no'>+44 221 133 5360  <span><PiDiamondFill className='diamond-icon'/></span> Customercare@mettamuse.com</p>
        </div>
        <div className='company-routes'>
            <h4>metta muse</h4>
            <VscChevronDown className='down-face'/>
        </div>
        <div className='quick-links'>
            <h5>QUICK LINKS</h5>
            <VscChevronDown className='down-face'/>
        </div>
        <div className='social-media-platforms'>
            <h5>FOLLOW US</h5>
            <VscChevronDown className='down-face'/>
        </div>

     </div>
    
        
    </div>
)
export default Footer