import React, { useState, useEffect } from "react";
import navstyles from "./nav.module.css";
import razorpay from "../../../assets/razorpay.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Click from "../PopupMenu/Click";

const Nav = () => {
  return (
    <nav className={navstyles.navbar}>
      <div className={navstyles.logo}>
        <img src={razorpay} width="120px" alt="logo" />
      </div>
      <div className={navstyles.rightside}>
        <button>Login</button>
        <div className={navstyles.hamburger}>
          <div className={navstyles.icon}>
            <Click />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
