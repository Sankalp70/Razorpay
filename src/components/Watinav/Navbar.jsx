import navstyles from "./Navbar.module.css";
import watilogo from "../../assets/watilogo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Watinav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={navstyles.navbar}>
        <div className={navstyles.navbarLogo}>
          <img width="60px" src={watilogo} alt="logo" />
          <h1>wati</h1>
        </div>
        <div className={navstyles.hamburger} onClick={toggleMenu}>
          <FaBars /> {/* Display hamburger icon */}
        </div>

        <ul className={navstyles.navbarNav}>
          {/* List item with dropdown menu for Pricing */}
          <li className={navstyles.navItem}>
            <a href="/" className={navstyles.navLink}>
              Pricing
            </a>
            <div className={navstyles.dropdownMenu}>
              <h4>Basic</h4>
              <h4>Standard</h4>
              <h4>Premium</h4>
              <h4>Enterprise</h4>
              <h4>Custom</h4>
            </div>
          </li>
          {/* List item with dropdown menu for Features */}
          <li className={navstyles.navItem}>
            <a href="/about" className={navstyles.navLink}>
              Features
            </a>
            <div className={navstyles.dropdownMenu}>
              <h4>Click to WhatsApp Ads</h4>
              <h4>Catalouge</h4>
              <h4>Shared Team Inbox</h4>
              <h4>Custom Notification</h4>
              <h4>No Code Chatbot</h4>
            </div>
          </li>
          {/* Default nav items without dropdown */}
          <li className={navstyles.navItem}>
            <a href="/services" className={navstyles.navLink}>
              Solutions
            </a>
            <div className={navstyles.dropdownMenu}>
              <h4>Education</h4>
              <h4>Marketing Agencies</h4>
              <h4>Sales Team</h4>
              <h4>Marketing Teams</h4>
              <h4>Customer Support</h4>
              <h4>Ecommerce</h4>
              <h4>Healthcare</h4>
            </div>
          </li>
          <li className={navstyles.navItem}>
            <a href="/integration" className={navstyles.navLink}>
              Integrations
            </a>
            <div className={navstyles.dropdownMenu}>
              <h4>ZOHO CRM</h4>
              <h4>Shopify</h4>
              <h4>Woo Commerce</h4>
              <h4>Zaiper</h4>
              <h4>HubSpot</h4>
              <h4>Pabbly Connect</h4>
              <h4>Make aka Integromat</h4>
              <h4>Whatsapp Shop</h4>
              <h4>Chat Backup</h4>
              <h4>Google Sheet Sender</h4>
              <h4>Klaviyo</h4>
              <h4>Zoho Flow</h4>
            </div>
          </li>
          <li className={navstyles.navItem}>
            <a href="/partners" className={navstyles.navLink}>
              Affiliate/Partners
            </a>
            <div className={navstyles.dropdownMenu}>
              <h4>Become an Affiliate</h4>
              <h4>Become a Partner</h4>
            </div>
          </li>
          <li className={navstyles.navItem}>
            <a href="/resources" className={navstyles.navLink}>
              Resources
            </a>
            <div className={navstyles.dropdownMenu}>
              <h4>Blogs</h4>
              <h4>Free Ebooks</h4>
              <h4>Customer Stories</h4>
              <h4>Wati Academy(Free)</h4>
              <h4>Free Udemy Course</h4>
              <h4>WhatsApp Templates(Free)</h4>
              <h4>Brand Guidelines</h4>
            </div>
          </li>
        </ul>

        <div className={navstyles.btn}>
          <button className={navstyles.demo}>Book Demo</button>
          <button className={navstyles.dashboard}>Dashboard</button>
        </div>
      </nav>
    </div>
  );
};

export default Watinav;
