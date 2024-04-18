import component from "./Component.module.css";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { LiaQrcodeSolid } from "react-icons/lia";

function DynamicHeading() {
  const headings = [
    "Magic Checkout",
    "Subscriptions",
    "QR Code",
    "International Pay",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % headings.length);
    }, 2000); // Changes heading every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={component.container}>
      <div className={component.icons}>
        <span>
          <HiOutlineComputerDesktop />
        </span>
        <span>
          <TbArrowsDoubleSwNe />
        </span>
        <span>
          <LiaQrcodeSolid />
        </span>
      </div>
      <div className={component.heading}>
        {headings[activeIndex]} +24 Others
      </div>
      <div className={component.arrowIcon}>
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default DynamicHeading;
