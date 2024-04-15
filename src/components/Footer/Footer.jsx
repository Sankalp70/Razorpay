import React from "react";
import footerstyles from "./Footer.module.css";
import razorpay from "../../assets/razorpay.svg";
import { IoArrowForward } from "react-icons/io5";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import Iso from "../../assets/iso.png";
import Pci from "../../assets/pci.png";
import Soc from "../../assets/soc.png";

const Footer = () => {
  return (
    <div>
      <div className={footerstyles.mainContainer}>
        <div className={footerstyles.heading}>
          <h1>
            Supercharge your business <br /> with Razorpay
          </h1>
        </div>
        <div className={footerstyles.signupBtn}>
          <button>
            Sign Up Now <IoArrowForward />
          </button>
        </div>
        <div className={footerstyles.logo}>
          <img src={razorpay} width="110px" alt="" />
        </div>
        <div className={footerstyles.paragraph}>
          <p>
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.{" "}
            <br />
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial
            processes. With RazorpayX, businesses can get access to
            fully-functional current accounts, supercharge their payouts and
            automate payroll compliance.
            <br />
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans - all from a single platform. Fast forward your business with
            Razorpay.
            <br />
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX
            powered current account is provided by our partner banks i.e, ICICI,
            RBL, Yes bank, in accordance with RBI regulations. RazorpayX itself
            is not a bank and doesn't hold or claim to hold a banking license.
          </p>
          <div className={footerstyles.image}>
            <img src={Pci} width="93px" alt="pci" />
            <img src={Iso} width="86px" alt="iso" />
            <br />
            <img src={Soc} width="90px" alt="pci" />
          </div>
        </div>
        <div className={footerstyles.footerElements}>
          <footer className={footerstyles.footer}>
            <div className={footerstyles.container}>
              <div className={footerstyles.section}>
                <h2>BANKING PLUS</h2>
                <ul>
                  <li>RazorpayX</li>
                  <li>Source to pay</li>
                  <li>Current Accounts</li>
                  <li>Payouts</li>
                  <li>Payout Links</li>
                  <li>Corporate Credit Card</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>LENDING</h2>
                <ul>
                  <li>Razorpay Capital</li>
                  <li>Instant Settlements</li>
                  <li>Line of Credit</li>
                  <li>Working Capital Loans</li>
                  <li>Marketplace Instant Settlements</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>BECOME A PARTNER</h2>
                <ul>
                  <li>Refer and Earn</li>
                  <li>Onboarding APIs</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>MORE</h2>
                <ul>
                  <li>Route</li>
                  <li>Invoices</li>
                  <li>Freelancer Payments</li>
                  <li>International</li>
                  <li>Flash Checkout</li>
                  <li>UPI</li>
                  <li>ePOS</li>
                  <li>Checkout Demo</li>
                  <li>RazorpayX Payroll</li>
                </ul>
              </div>
            </div>

            <div className={footerstyles.container}>
              <div className={footerstyles.section}>
                <h2>PAYMENT</h2>
                <ul>
                  <li>Payment Gateway</li>
                  <li>Payment Pages</li>
                  <li>Payment Links</li>
                  <li>Razorpay POS</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>DEVELOPERS</h2>
                <ul>
                  <li>Docs</li>
                  <li>Integrations</li>
                  <li>API Reference</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>RESOURCES</h2>
                <ul>
                  <li>Blog</li>
                  <li>Customer Stories</li>
                  <li>Events</li>
                  <li>Chargeback Guide</li>
                  <li>Settlement Guide</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>SOLUTIONS</h2>
                <ul>
                  <li>Education</li>
                  <li>E-commerce</li>
                  <li>SaaS</li>
                  <li>BFSI</li>
                </ul>
              </div>
            </div>

            <div className={footerstyles.container}>
              <div className={footerstyles.section}>
                <h2>FREE TOOLS</h2>
                <ul>
                  <li>GST Calculator</li>
                  <li>Online TDS Payment</li>
                  <li>GST Number Search</li>
                  <li>GST Search by PAN</li>
                  <li>ROI Calculator</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>COMPANY</h2>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Grievance Redressal</li>
                  <li>Responsible Disclosure</li>
                  <li>Partners</li>
                  <li>White papers</li>
                  <li>Corporate Information</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>HELP & SUPPORT</h2>
                <ul>
                  <li>Support</li>
                  <li>Knowledge base</li>
                </ul>
              </div>

              <div className={footerstyles.section}>
                <h2>FIND US ONLINE</h2>
                <div className={footerstyles.socials}>
                  <ul>
                    <li>
                      <Facebook />
                    </li>
                    <li>
                      <GithubIcon />
                    </li>
                    <li>
                      <Instagram />
                    </li>
                    <li>
                      <Twitter />
                    </li>
                    <li>
                      <Linkedin />
                    </li>
                  </ul>
                </div>
              </div>
              <div className={footerstyles.container}>
                <h4>REGD. OFFICE ADDRESS</h4>
                <address>
                  Razorpay Software Private Limited,
                  <br />
                  1st Floor, SJR Cyber,
                  <br />
                  22 Laskar Hosur Road, Adugodi,
                  <br />
                  Bengaluru, 560030,
                  <br />
                  Karnataka, India
                </address>
                <p>CIN: U72200KA2013PTC097389</p>
                <p>© Razorpay 2024. All Rights Reserved</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
