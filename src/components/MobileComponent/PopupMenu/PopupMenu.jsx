import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import menu from "./Popupmenu.module.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { MdSmartButton } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiDownloadOutline } from "react-icons/ti";
import { CiPercent } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const PopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={menu.popupContainer}>
      <button className={menu.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu className={menu.click}/>
      </button>
      {isOpen && (
        <div key={isOpen} className={menu.popupMenu} style={{ display: isOpen ? 'flex' : 'none' }}>

          <div className={menu.popupMenuContent}>
            <span
              className={menu.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 size={24}/>
            </span>
            <h2>PAYMENTS</h2>
            <ul>
              <li>
                <HiOutlineDesktopComputer className={menu.icon} />
                Payment Gateway
              </li>
              <li>
                <TbArrowsDoubleNeSw className={menu.icon} />
                Payment Links
              </li>
              <li>
                <MdSmartButton className={menu.icon} />
                Payment Buttons
              </li>
            </ul>
            <p>
              Explore Payment Suite
              <MdOutlineKeyboardArrowRight />
            </p>
            <hr className={menu.line} />
            <div className={menu.container}>
              <h3>Not sure which product to choose?</h3>

              <button className={menu.btn}>
                Find me a product
                <BsBoxArrowUpRight style={{ marginLeft: "10px" }} />
              </button>
            </div>
            <h2 className={menu.suite}>RAZORPAY X-BANKING SUITE</h2>
            <ul>
              <li>
                <CiBank className={menu.icon} />
                Current Accounts
              </li>
              <li>
                <IoNewspaperOutline className={menu.icon} /> Vendor Payments
              </li>
              <li>
                <TiDownloadOutline className={menu.icon} />
                Payroll
              </li>
            </ul>
            <h5>
              Explore Banking Suite
              <MdKeyboardArrowRight />
            </h5>
            <hr className={menu.line} />
            <ul className={menu.feat}>
              <li>
                <CiPercent
                  className={menu.icon}
                  style={{ backgroundColor: "#f8efba", color: "#e47615" }}
                />
                Pricing
                <MdKeyboardArrowRight />
              </li>
              <li>
                <MdOutlineMenuBook className={menu.icon} />
                Resources
                <MdKeyboardArrowRight />
              </li>
              <li>
                <IoPeopleOutline className={menu.icon} />
                Partners
                <MdKeyboardArrowRight />
              </li>
              <li>
                <BiSupport className={menu.icon} />
                Support
                <MdKeyboardArrowRight />
              </li>
            </ul>
            <button className={menu.loginButton}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
