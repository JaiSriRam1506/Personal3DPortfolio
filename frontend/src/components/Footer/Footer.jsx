import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, My name is Rajani Kant Sharma, 
          Software Engineer(Expertise in RPA-Blue Prism)at TietoEVRY, Ex-IBMer, Knowledge of UiPath, Operations, 
          Production, Service Now,Data Structure and Algorithm in JavaScript, ReactJs, ExpressJs, MERN 
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/JaiSriRam1506/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/ProGAMER/" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/rajanikant097/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rajani-kant-sharma-b44a12104/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
