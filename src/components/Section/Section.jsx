import React, { useState } from "react";
import sectionStyles from "./Section.module.css";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdOutlineWebhook } from "react-icons/md";
import { LuUnplug } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { TbArrowsDiagonal2 } from "react-icons/tb";
import snippet from "../../assets/snippet.png";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsQrCode } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";

const Section = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: 0,
      heading: "Payment Links",
      paragraph:
        "Accept payments instantly <span class={sectionStyles.blueText}>Share Links</span> via email, text, or social",
      icon: <TbArrowsDoubleSwNe />,
    },

    {
      id: 1,
      heading: "Payment Pages",
      paragraph: "Accept payments without coding on a custom-branded store",
      icon: <RiSecurePaymentLine />,
      blueText: "coding on a custom-branded store",
    },
    {
      id: 2,
      heading: "Payment Buttons",
      paragraph:
        "Effortlessly add a Pay Now button without any coding knowledge",
      icon: <TiMessages />,
    },
    {
      id: 3,
      heading: "Invoices",
      paragraph: "Generate GST invoices,get instant payment from customers",
      icon: <LiaFileInvoiceSolid />,
    },
    {
      id: 4,
      heading: "QR Code",
      paragraph:
        "Grow your business with your own branded multi-feature QR code",
      icon: <BsQrCode />,
    },
    {
      id: 5,
      heading: "Sbuscription",
      paragraph: "Automate subscriptions:Recurring pyments via cards & UPI",
      icon: <FaArrowsRotate />,
    },
  ];

  const CardComponent = ({ card }) => (
    <div
      key={card.id}
      className={`${sectionStyles.card} ${sectionStyles.transition}`}
    >
      
      <div className={sectionStyles.icon}>
        {React.cloneElement(card.icon, { className: sectionStyles.iconClass })}
      </div>
      <h2>{card.heading}</h2>
     
      <p>
        {card.id === 0 ? (
          <>
            Accept payments instantly{" "}
            <span className={sectionStyles.blueText}>Share links</span> via
            email, text, or social
          </>
        ) : (
          card.paragraph
        )}
      </p>
      <button>
        Sign Up <FaArrowRight />
      </button>
    </div>
  );

  const handleNext = () => {
    setCurrentCard((currentCard) => (currentCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard(
      (currentCard) => (currentCard - 1 + cards.length) % cards.length
    );
  };

  const myStyle = {
    fontSize: "22px",
    paddingTop: "10px",
    paddingBottom: "10px",
  };

  return (
    <div>
      <div className={sectionStyles.firstContainer}>
        <div className={sectionStyles.movingStrip}>
          <div className={sectionStyles.stripContent}>
            {[
              "Python",
              "JavaScript",
              "Java",
              "C#",
              "Go",
              "Ruby",
              "Swift",
              "Kotlin",
              "Python",
              "JavaScript",
              "Java",
              "C#",
              "Go",
              "Ruby",
              "Swift",
              "Kotlin",
            ].map((language, index) => (
              <div key={index} className={sectionStyles.languageName}>
                <span className={sectionStyles.bullet}></span>
                {language}
              </div>
            ))}
          </div>
        </div>
        <div className={sectionStyles.mainHeading}>
          <h1>
            {" "}
            Razorpay is built <br />{" "}
            <span style={{ color: "green" }}>
              {" "}
              &lt; for developers by developers &gt;{" "}
            </span>
          </h1>
        </div>
        <div className={sectionStyles.mainSection}>
          <div className={sectionStyles.integration}>
            <h4 style={myStyle}>
              {" "}
              <MdOutlineIntegrationInstructions />
            </h4>
            <h5 style={myStyle}>Integration</h5>
            <p>
              Find all popular platform SDKs, plugin, server integrations in our
              integration stack.
            </p>
            <br />
            <span>
              View Docs
              <FaArrowRight />{" "}
            </span>
          </div>
          <div className={sectionStyles.reference}>
            <h4 style={myStyle}>
              <MdOutlineWebhook />
            </h4>
            <h5 style={myStyle}>API Reference</h5>
            <p>
              Comprehensive documentation to build powerful payment solutions.
            </p>
            <br />
            <span>
              View Docs
              <FaArrowRight />
            </span>
          </div>
          <div className={sectionStyles.webhooks}>
            <h4 style={myStyle}>
              <LuUnplug />
            </h4>
            <h5 style={myStyle}>Webhooks</h5>
            <p>
              Receive real-time notifications for all payment related
              transactions and events
            </p>
            <br />
            <span>
              View Docs
              <FaArrowRight />
            </span>
          </div>
        </div>

        <div className={sectionStyles.content}>
          <h2>
            Try it out for yourself <TbArrowsDiagonal2 />
          </h2>
          <img src={snippet} alt="snippet" />
        </div>
      </div>
      <div className={sectionStyles.secondContainer}>
        <b>&lt; what html &gt;</b>
        <h1 style={{ color: "green" }}>Not a developer?</h1>
        <h1>Our No-Code products have you covered.</h1>
        <div className={sectionStyles.cardSlider}>
          <div className={sectionStyles.cardContainer}>
            {cards.slice(currentCard, currentCard + 3).map((card) => (
              <CardComponent key={card.id} card={card} />
            ))}
          </div>
          <div className={sectionStyles.toggleButtons}>
            <button onClick={handlePrev}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
