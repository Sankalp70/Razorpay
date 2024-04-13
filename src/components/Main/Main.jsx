import React, { useEffect, useState } from "react";
import dummy1 from "../../assets/webimg.png";
import dummmynew2 from "../../assets/dummynew2.png";
import dummynew3 from "../../assets/dumynew3.png";
import MainStyles from "./Main.module.css";
import { CgSearch } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zomato from "../../assets/Zomato.svg";
import Swiggy from "../../assets/Swiggy.svg";
import macd from "../../assets/macd.svg";
import spotify from "../../assets/spotify.svg";
import intiar from "../../assets/intiar.svg";
import underarmour from "../../assets/underarmour.svg";

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [dummy1, dummmynew2, dummynew3];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6500,
    autoplaySpeed: 6500,
    cssEase: "linear",
  };

  return (
    <div className={MainStyles.gradient}>
      <div className={MainStyles.mainContainer}>
        <img
          src={images[currentImageIndex]}
          width="300px"
          height="300px"
          alt="slideimage"
          style={{ width: "100%", height: "500px" }}
        />
      </div>
      <div className={MainStyles.inputBox}>
        <span className={MainStyles.searchIcon}>
          <CgSearch />
        </span>
        <input
          className={MainStyles.inputField}
          type="text"
          placeholder=" I am here to Accept Payments"
          style={{ paddingLeft: "30px" }}
        />
      </div>
      <div className={MainStyles.navSlider}>
        <Slider {...settings}>
          <div className={MainStyles.container}>
            <img src={Zomato} height="30px" alt="img1" />
          </div>
          <div className={MainStyles.container}>
            <img src={intiar} height="60px" alt="intiar" />
          </div>
          <div className={MainStyles.container}>
            <img src={spotify} height="90px" alt="spotify" />
          </div>
          <div className={MainStyles.container}>
            <img src={underarmour} height="90px" alt="underarmour" />
          </div>
          <div className={MainStyles.container}>
            <img src={Swiggy} height="90px" alt="swiggy" />
          </div>
          <div className={MainStyles.container}>
            <img src={macd} height="90px" alt="macd" />
          </div>
        </Slider>
      </div>
      <div className={MainStyles.heading}>
  <h1>
    The all in one <span className={MainStyles.greenText}>finance platform</span><br/> you've been looking for
  </h1>
  <div className={MainStyles.paragraph}>
    <span className={MainStyles.menu}>With Razorpay, you can: |</span>
    <span>Accept Payments</span>
    <span>Make Payout</span>
    <span>Business Banking</span>
    <span>Automate Payroll</span>
    <span>Get Credit & Loans</span>
  </div>
</div>
    </div>
  );
};

export default Main;
