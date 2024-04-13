import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { GrMap } from "react-icons/gr";
import features from "./Features.module.css";
import zomato from "../../assets/Zomato.svg";
import ecommerce from "../../assets/ecommerce.jpeg";
import education from "../../assets/education.jpg";
import swiggy from "../../assets/Swiggy.svg";
import saa from "../../assets/saa2.jpg";
import bfsi from "../../assets/bfsi.jpg";
import freelance from "../../assets/freelance.jpg";
import underarmour from "../../assets/underarmour.svg";
import macd from "../../assets/macd.svg";
import ntpc from "../../assets/NTPC.svg";
import lava from "../../assets/Lava.svg";
import instagram from "../../assets/instagram.svg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineDisconnect } from "react-icons/ai";
import { TbArrowFork } from "react-icons/tb";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdShoppingCartCheckout } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { PiGooglePlayLogoDuotone } from "react-icons/pi";

const Features = () => {
  const [card, setCard] = useState("E-commerce");

  const handleCardChange = (cardName) => {
    setCard(cardName);
  };
  const images = {
    "E-commerce": ecommerce,
    Education: education,
    BFSI: bfsi,
    SaaS: saa,
    Freelance: freelance,
  };

  const icons = [
    <MdOutlineShoppingCart />,
    <IoPlaySkipForwardOutline />,
    <HiOutlineShoppingBag />,
    <MdOutlineVideogameAsset />,
    <GrMap />,
  ];

  const cardDetails = {
    "E-commerce": {
      heading: "Empower your e-commerce business",
      paragraph:
        "Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.",
      image: [zomato, swiggy, lava],
      buttonLabel: "See Solutions",
    },
    Education: {
      heading: "Payment for your education business",
      paragraph:
        "Effortlessly establish and monitor fee payments and vendor payouts for educational institutions, tutorials, or online courses, whether you have a website or not.",
      image: [macd, underarmour, ntpc],
      buttonLabel: "See Solutions",
    },
    BFSI: {
      heading: "Payments ecosystem for financial services",
      paragraph:
        "Streamline collection management, automate recurring payments, and expedite loan disbursement for a comprehensive financial solution.",
      image: [instagram, lava, swiggy],
      buttonLabel: "See Solutions",
    },
    SaaS: {
      heading: "Global Payment Solutions for IT & SaaS Providers",
      paragraph:
        "Seamlessly accept payments in over 100 currencies, facilitate customizable subscription payments, and efficiently execute vendor payouts.",
      image: [zomato, macd, ntpc],
      buttonLabel: "See Solutions",
    },
    Freelance: {
      heading: "The personalized payment solution for freelancers",
      paragraph:
        "Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.",
      buttonLabel: "See Solutions",
    },
  };
  /************************************************************Second Container*************************************************************************/

  const [activeCard, setActiveCard] = useState(1);

  const goToPrevCard = () => {
    setActiveCard((prevCard) => (prevCard === 1 ? 3 : prevCard - 1));
  };

  const goToNextCard = () => {
    setActiveCard((prevCard) => (prevCard === 3 ? 1 : prevCard + 1));
  };

  const cardsData = [
    {
      heading: "Optimiser",
      icons:<AiOutlineDisconnect />,
      image: "",
      paragraph:
        "Utilise 15+ payment gateways for all \n Aggregators,improve success rates by \n 10% with zero downtime, and cut charges \n fees by 15-30%.",
      para: "Manage multiple payment gateways with an AI-powered infinity router",
      rightIcon:<TbArrowFork />,
      header:"Payouts Pro",
      content:"Automate real-time \n routing across \n multiple accounts,\n and achieve 99.\n9% success, \n prevent bank \n down- \n time disruptions.",
      footer:"Achieve unbeatable payouts \n success rates with our \n dynamic multi-bank routing",
    },
    {
      heading: "MoneySaver Export Account",
      icons:<SlGlobe />,
      image: "",
      paragraph:
        "Utilise 15+ payment gateways for all \n Aggregators,improve success rates by \n 10% with zero downtime, and cut charges \n fees by 15-30%.",
      para: "Manage multiple payment gateways with an AI-powered infinity router",
      rightIcon:<PiGooglePlayLogoDuotone />,
      header:"Turbo UPI",
      content:"Automate real-time \n routing across \n multiple accounts,\n and achieve 99.\n9% success, \n prevent bank \n down- \n time disruptions.",
      footer:"Achieve unbeatable payouts \n success rates with our \n dynamic multi-bank routinG",
    },
    {
      heading: "Line of Credit",
      icons:<TbPlayerTrackNext />,
      image: "",
      paragraph:
        "Utilise 15+ payment gateways for all \n Aggregators,improve success rates by \n 10% with zero downtime, and cut charges \n fees by 15-30%.",
      para: "Manage multiple payment gateways with an AI-powered infinity router",
      rightIcon:<MdOutlineShoppingCart />,
      header:"Magic Checkout",
      content:"Automate real-time \n routing across \n multiple accounts,\n and achieve 99.\n9% success, \n prevent bank \n down- \n time disruptions.",
      footer:"Achieve unbeatable payouts \n success rates with our \n dynamic multi-bank routinG",
    },
  ];

  return (
    <div>
      <div className={features.mainContainer}>
        <div className={features.heading}>
          <h1>
            Powering every industry. <br /> Powering all disruptors.
          </h1>
        </div>
        <div className={features.icons}>
          <div className={features.iconContainer}>
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`${features.icon} ${features.bounce}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className={features.cardContainer}>
          <div className={features.cardButtons}>
            {Object.keys(images).map((cardName) => (
              <button
                key={cardName}
                onClick={() => handleCardChange(cardName)}
                className={card === cardName ? features.active : ""}
              >
                {cardName}
              </button>
            ))}
          </div>
          <div className={features.cardContent}>
            <img
              style={{ width: "1290px", height: "600px" }}
              src={images[card]}
              alt={card}
            />
            <div className={features.overlay}>
              <div className={features.overlayContent}>
                <h2>{cardDetails[card].heading}</h2>
                <p>{cardDetails[card].paragraph}</p>
                <button>
                  {cardDetails[card].buttonLabel}
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**********************************************Second Container***********************************************************/}
        <div className={features.featureCard}>
          <div className={features.header}>
            <h1>We have innovated at every instance, creating a disruption.</h1>
          </div>
          <div className={features.cardContainers}>
            <div className={features.card80}>
              <div className={features.cardContents}>
                <h2>{cardsData[activeCard - 1].heading}</h2>
                <p>{cardsData[activeCard - 1].paragraph}</p>
                <h4>{cardsData[activeCard - 1].para}</h4>
                <b>{cardsData[activeCard - 1].icons}</b>
                <button className={features.SignupBtn}>Sign Up <HiArrowNarrowRight/></button>
                <button className={features.knowMore}>Know More</button>
                 <h3>{cardsData[activeCard - 1].rightIcon}</h3>
                <h1>{cardsData[activeCard - 1].header}</h1>
                <h5>{cardsData[activeCard - 1].content}</h5>
                <footer>{cardsData[activeCard - 1].footer}</footer>
              </div>
            </div>
            
              <button className={features.arrow1} onClick={goToPrevCard}>
                <RiArrowLeftSLine />
              </button>
              <button className={features.arrow2} onClick={goToNextCard}>
                <RiArrowRightSLine />
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
