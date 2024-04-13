import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Scroller from "./components/Scroller/Scroller";
import Features from "./components/Features/Features";


const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Carousel/>
      <Features/>
      <Section />
       <Scroller/>    
       <Footer />
    </div>
  );
};

export default App;
