import React, { useState } from "react";
import scrollstyles from "./Scroller.module.css";
import frontImage1 from "../../assets/founder1.webp";
import frontImage2 from "../../assets/founder5.jpeg";
import frontImage3 from "../../assets/founder3.jpeg";
import frontImage4 from "../../assets/founder4.jpeg";
import frontImage5 from "../../assets/founder2.jpeg";
import frontImage6 from "../../assets/founder6.jpg";

const Scroller = () => {
  const [isHovered, setIsHovered] = useState(null);

  const frontImages = [
    frontImage1,
    frontImage2,
    frontImage3,
    frontImage4,
    frontImage5,
    frontImage6,
  ];

  const frontParagraphs = [
    `Aditya Shankar\nCo-founder-DoubtNut`,
    "Nikita Gujral\nFounder-AN Fashions",
    "Nischay AG\nCo-founder Jar",
    "Aman Verma\nFounder MIVI",
    "Amit Singh\nFounder Barosi",
    "Richelieu\nDennis Founder Sundial",
  ];
  const backParagraphs = [
    "Razorpay's revolving Line of Credit simplifies financial management, aiding inventory planning during cash flow gaps.",
    "RazorpayX works for most of our needs - be it our salaries, be it our compliance, be it our payments to vendors And the biggest headache of all OTPs went away.",
    "We chose Razorpay because Razorpay is easy to setup, there are different options for my customers & millions of businesses already trust Razorpay.",
    "Razorpay simplifies cross-border bank transfers with the MoneySaver Exporter Account, reducing FIRC generation time from up to 5 days to seconds.",
    "Razorpay Magic Checkout is truly a magical solution. Our conversion rate has increased by 35% & our COD, RTO has drastically decreased.",
    "Razorpay's revolving Line of Credit simplifies financial management, aiding inventory planning during cash flow gaps.",
  ];

  const handleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <div className={scrollstyles.cardSlider}>
      <div className={scrollstyles.heading}>
        Razorpay grows with <span style={{ color: "blue" }}>you !</span>
        <p>1,50,000+ Business</p>
      </div>
      <div className={scrollstyles.cardsContainer}>
        {[...Array(6).keys()].map((index) => (
          <div
            key={index}
            className={`${scrollstyles.card} ${
              index % 2 === 0 ? scrollstyles.up : scrollstyles.down
            } ${isHovered === index ? scrollstyles.hovered : ""}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <div className={scrollstyles.cardFront}>
              <img
                src={frontImages[index]}
                alt={`frontsideimage`}
                style={{ width: "300px", height: "370px", gap: "40px" }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                className={scrollstyles.cardText}
              >
                {frontParagraphs[index].split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div
              style={{ backgroundColor: "white", fontWeight: "bold" }}
              className={scrollstyles.cardBack}
            >
              <p className={scrollstyles.cardText}>{backParagraphs[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
