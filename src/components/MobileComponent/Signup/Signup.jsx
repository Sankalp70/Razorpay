import React from "react";
import signup from "./Signup.module.css";
import { LuCheckCircle } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import view from "../../../assets/view.avif";

const Signup = () => {
  return (
    <div className={signup.mainContainer}>
      <h2>Signup up with Razorpay</h2>
      <p>Experience the future of payments with Razorpay</p>
      <div className={signup.features}>
        <span>
          <LuCheckCircle style={{ backgroundColor: "#d3ecc4" }} />
          Powerful tech stack
        </span>
        <span>
          <LuCheckCircle style={{ backgroundColor: "#d3ecc4" }} />
          Safe and secure payments
        </span>
        <span>
          <LuCheckCircle style={{ backgroundColor: "#d3ecc4" }} />
          Trusted by 5MN+ businesses
        </span>
      </div>
      <h5>Follow these simple steps to get started!</h5>
      <div className={signup.formContainer}>
        <form>
          <label>
            <span className={signup.requiredText}>Enter your Name</span>
            <input type="text" placeholder="Enter your Name" />
          </label>
          <br />
          <label>
            <span className={signup.requiredText}>Enter Mobile Number</span>
            <input type="text" placeholder="Enter Mobile Number" />
          </label>
          <br />
          <button type="submit">
            Next
            <FaArrowRightLong style={{ backgroundColor: "lightgray" }} />
          </button>
        </form>
        <img src={view} width="290px" alt="image1" />
      </div>
    </div>
  );
};

export default Signup;
