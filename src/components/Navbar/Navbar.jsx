import React, { useState, useEffect } from "react";
import NavbarStyles from "./Navbar.module.css";
import leftimg from "../../assets/leftgradient.png";
import indianflag from "../../assets/indianFlag.png";
import Razorpayicon from "../../assets/razorpay.svg";
import { IoArrowForward } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";

const Navbar = () => {
  const [heading, setHeading] = useState(
    "Begin FY25 with India's only fully automated Payroll Software IN Sign UP For Payroll"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeading(
        ` Avail Zero RENTALS*  on All Razorpay Swipe Machines for 3 months Order now`
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const indexOfOrderNow = heading.indexOf(`Order now`);

  return (

    <div className={`${NavbarStyles.navbar} ${isScrolled ? NavbarStyles.scrolled : ''}`}>
      <div className={NavbarStyles.leftImg}>
        <img src={leftimg} alt="leftImage" />
      </div>
      <div className={NavbarStyles.mainContainer}>
        <h1 className={NavbarStyles.heading}>
          <span className={NavbarStyles.trending}>
          <BsLightningCharge />TRENDING
          </span>
          <span style={{ color: "black" }}>
            {heading.slice(0, indexOfOrderNow)}
          </span>
          <span style={{ color: "blue" }}>
            {heading.slice(indexOfOrderNow, indexOfOrderNow + 9)}
          </span>
          <span>
            <IoArrowForward style={{ color: "blue" }} />
          </span>
          <span style={{ color: "blue" }}>
            {heading.slice(indexOfOrderNow + 9)}
          </span>
        </h1>
      </div>
      <div className={NavbarStyles.rightImg}>
        <img src={leftimg} alt="rightImage" />
      </div>

      <nav className={NavbarStyles.mainNav}>
        <div className={NavbarStyles.logo}>
          <img src={Razorpayicon} style={{width:"117px"}} alt="Razorpay Logo" />
        </div>
        <ul>
          <ul>
            <li>
              <a href="/#">Payments</a>
            </li>
            <li>
              <a href="/#">Banking+</a>
            </li>
            <li>
              <a href="/#">Payroll</a>
            </li>
            <li>
              <a href="/#">Partners</a>
            </li>
            <li>
              <a href="/#">Resources</a>
            </li>
            <li>
              <a href="/#">Support</a>
            </li>
            <li>
              <a href="/#">Pricing</a>
            </li>
          </ul>
       
        <div className={NavbarStyles.flag}>
          <img src={indianflag} alt="Indian Flag" style={{ height: "20px" }} />
        </div>
        <div className={NavbarStyles.auth}>
            <a className={NavbarStyles.login} href="/#">Log In</a>
            <a className={NavbarStyles.signup} href="/#">Sign Up</a>
        </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
