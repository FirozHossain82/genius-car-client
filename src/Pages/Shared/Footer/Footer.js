import React from 'react';
import logo from '../../../assets/logo.svg'
import { FaFacebook, FaGithub, FaLinkedin,  FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer px-32 py-20  bg-black text-white">
        <div>
                <img src={logo} alt="" />
                <p><small>Hossain is a software and web technologies engineer, <br />
                    a life coach trainer who is also a serial.</small></p>
                <div className="grid grid-flow-col gap-4 p-2  ">
                            <Link to='/'><FaFacebook className='w-5 h-5'/></Link>
                            <FaGithub className='w-5 h-5'/>
                            <FaTwitter className='w-5 h-5' />
                            <FaLinkedin className='w-5 h-5' />
                </div>
        </div> 
        <div >
          <span className="footer-title mb-8 text-lg " >ABOUT</span> 
          <a href = "/" className="link link-hover">Home</a> 
          <a href = "/" className="link link-hover">Service</a> 
          <a href = "/" className="link link-hover">Contact</a> 
          {/* <a href = "/" className="link link-hover">Advertisement</a> */}
        </div> 
        <div>
          <span className="footer-title mb-8 text-lg">Company</span> 
          <a href = "/" className="link link-hover">About us</a> 
          <a href = "/" className="link link-hover">Contact</a> 
          <a href = "/" className="link link-hover">Jobs</a> 
          {/* <a href = "/" className="link link-hover">Press kit</a> */}
        </div> 
        <div>
          <span className="footer-title mb-8 text-lg ">SUPPORT</span> 
          <a href = "/" className="link link-hover">Support Center</a> 
          <a href = "/" className="link link-hover">Feedback</a> 
          <a href = "/" className="link link-hover">Accesbility</a>
        </div>
      </footer>
    );
};

export default Footer;