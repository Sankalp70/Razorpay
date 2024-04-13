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
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { GoArrowRight } from "react-icons/go";

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
      image: [zomato, swiggy,lava],
      buttonLabel: "See Solutions",
    },
    Education: {
      heading: "Payment for your education business",
      paragraph: "Effortlessly establish and monitor fee payments and vendor payouts for educational institutions, tutorials, or online courses, whether you have a website or not.",
      image: [macd,underarmour,ntpc],
      buttonLabel: "See Solutions",
    },
    BFSI: {
      heading: "Payments ecosystem for financial services",
      paragraph: "Streamline collection management, automate recurring payments, and expedite loan disbursement for a comprehensive financial solution.",
      image: [instagram,lava,swiggy],
      buttonLabel: "See Solutions",
    },
    SaaS: {
      heading: "Global Payment Solutions for IT & SaaS Providers",
      paragraph: "Seamlessly accept payments in over 100 currencies, facilitate customizable subscription payments, and efficiently execute vendor payouts.",
      image: [zomato,macd,ntpc],
      buttonLabel: "See Solutions",
    },
    Freelance: {
      heading: "The personalized payment solution for freelancers",
      paragraph: "Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.",
      buttonLabel: "See Solutions",
    },
  };
/************************************************************Second Container*************************************************************************/

const [activeCard, setActiveCard] = useState(1);

const goToPrevCard = () => {
  setActiveCard(activeCard === 1 ? 3 : activeCard - 1);
};

const goToNextCard = () => {
  setActiveCard(activeCard === 3 ? 1 : activeCard + 1);
};
   
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
                <div className={features.imageContainer}>
                  {Array.isArray(cardDetails[card].image) ? (
                    cardDetails[card].image.map((img, index) => (
                      <img
                        style={{ width: "70px" }}
                        key={index}
                        src={img}
                        alt={`img${index}`}
                      />
                    ))
                  ) : (
                    <img  style={{ width: "70px" }} src={cardDetails[card].image} alt="" />
                  )}
                </div>
                <button>
                  {cardDetails[card].buttonLabel}
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**********************************************Second Container***********************************************************/ }
        <div className={features.featureCard}>
               
        </div>
      </div>
     
    </div>
  );
};

export default Features;
