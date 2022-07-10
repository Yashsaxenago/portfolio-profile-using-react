import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/2-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Yash Saxena</h1>
      <h5 className="text-light">Web Developer | Web Designer</h5>
      <CTA />
      <HeaderSocials/>

      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll down
      </a>
    </div>
  </header>
);
export default Header;
