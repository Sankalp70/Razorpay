import React from "react";
import gridstyles from "./Grid.module.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import pos from "../../../assets/realpos.webp";
import paymentlinks from "../../../assets/socialmedia.jpg";
import gateway from "../../../assets/gateway.webp";
import paymentrequest from "../../../assets/paymentrequest.avif";

const Grid = () => {
  return (
    <div>
      <div className={gridstyles.pageHeading}>
        <h5>PG&MORE</h5>
        <h1> Accept Payments</h1>
      </div>
      <div className={gridstyles.gridContainer}>
        <div className={gridstyles.card}>
          <img src={gateway} style={{ width: "165px" }} alt="Image1" />
          <b>ON WEBSITE/APP</b>
          <h4>
            Payment Gateway
            <GoArrowUpRight />
          </h4>
          <p>Offer a seamless payment experience on your website or app</p>
          <button>
            Sign Up <GoArrowRight />
          </button>
        </div>
        <div className={gridstyles.card}>
          <img src={paymentlinks} alt="Image2" />
          <b>ON SOCIAL MEDIA</b>
          <h4>
            Payment Links
            <GoArrowUpRight />
          </h4>
          <p>Accept payments instantly:Share links via email,text,and social</p>
          <button>
            Sign Up
            <GoArrowRight />
          </button>
        </div>
        <div className={gridstyles.card}>
          <img src={pos} alt="Image3" />
          <b>IN STORE</b>
          <h4>
            Razorpay POS
            <GoArrowUpRight />
          </h4>
          <p>
            Accept seamless in-store payments with India"s best POS solution
          </p>
          <button>
            Sign Up
            <GoArrowRight />
          </button>
        </div>
        <div className={gridstyles.card}>
          <img src={paymentrequest} alt="Image4" />
          <b>ON WEBSITE/APP</b>
          <h4>
            Optimizer
            <GoArrowUpRight />
          </h4>
          <p>
            Connect to multiple payment processors with single API integration
          </p>
          <button>
            Sign Up
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grid;
