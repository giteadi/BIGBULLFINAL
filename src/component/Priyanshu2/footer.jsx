import React from "react";
import styled from "styled-components";
// import img from "../images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import logo from '../../../public/logo/logo.png'

const Footer = () => {
  return (
    <>
      <StyledContact>
      <footer className="">
      <div className="main-footer ">
        <div className="footer-content bg-white text-center text-lg p-6">
          <h4 style={{fontFamily: "Futura-bold"}} className="pt-4 text-5xl font-bold">We are Social</h4>
          <p className="bottom-para text-xl py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda!
          </p>
          <div className="bottom-icons mb-10">
            <div className="icons flex justify-center space-x-5  sm:space-x-8">
              <FaFacebook className=" text-3xl sm:text-5xl"/>
              <FaSquareInstagram className=" text-3xl sm:text-5xl"/>
              <FaTwitterSquare className=" text-3xl sm:text-5xl"/>
              <FaLinkedin className=" text-3xl sm:text-5xl"/>
              <FaYoutube className=" text-3xl sm:text-5xl"/>
            </div>
          </div>
          
          <div className="bottom-content flex flex-col lg:flex-row justify-between  text-2xl footer-links gap-20">
            

            <div className="columns grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-8 lg:gap-10 w-full lg:w-3/4 justify-center items-center mx-auto">
  <div className="column-1 sm:flex justify-center">
    <ul className="flex flex-col items-start px-0 lg:items-start space-y-2 lg:text-left sm:mb-5">
      <p className="head  my-4 pb-2">
        <b className="max-sm:text-2xl text-3xl font-medium	">Contact Us</b>
      </p>
      <li className="text-base my-1 c-fe ">Bigbull@gmail.com</li>
      <li className="text-base my-1 c-fe ">+91-1234567890</li>
      <li className="text-base my-1 c-fe "> India</li>
      
    </ul>
  </div>
  
  <div className="column-2 max-sm:pl-10 sm:flex justify-center">
    <ul className="flex flex-col items-start px-0 lg:items-start space-y-2 lg:text-left sm:mb-5">
      <p className="head my-4 pb-2">
        <b className="max-sm:text-2xl text-3xl font-medium	">Company</b>
      </p>
      <li className="text-base my-1 c-fe "><Link to={'/About'}>About</Link></li>
      <li className="text-base my-1 c-fe "><Link to={'/ContactUs'}>Contact Us</Link></li>
      <li className="text-base my-1 c-fe "><Link to={'/blogs'}>Blog</Link></li>
    </ul>
  </div>
  <div className="column-3 sm:flex justify-center">
    <ul className="flex flex-col items-start px-0 lg:items-start space-y-2 lg:text-left sm:mb-5">
      <p className="head my-4 pb-2">
        <b className="max-sm:text-2xl text-3xl font-medium	">Support</b>
      </p>
      <li className="text-base my-1 c-fe "><Link to={'/PrivacyPolicy'}>Privacy and Policy</Link></li>
      <li className="text-base my-1 c-fe "><Link to={'/TermCondition'}>Terms and Condition</Link></li>
      <br />
    </ul>
  </div>
  <div className="column-3 self-center">
  <div className='p-0 max-w-56'>
        <img src={logo} alt="Logo" width='100%' />
    </div>
  </div>
    </div>
    </div>
        </div>

        {/* <hr className="thick-line my-4" /> */}
        <div className="bg-black footer-bar">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 text-xs sm:text-sm text-white max-w-screen-2xl mx-auto">
        <p className="mb-2 md:mb-0 text-sm">&copy; 2024 DOAGuru InfoSystems</p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <p className="text-xs sm:text-sm">All Rights Reserved |</p>
          <p><Link to="/TermCondition" className="tandc text-xs sm:text-lg">Terms and Conditions |</Link></p>
          <p><Link to="/PrivacyPolicy" className="policy text-xs sm:text-lg">Privacy Policy</Link></p>
        </div>
      </div>
    </div>
      </div>
    </footer>
      </StyledContact>
    </>
  );
};

export default Footer;

const StyledContact = styled.div``;
