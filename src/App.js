import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Features from "./components/Features/Features";
import Nav from "./components/MobileComponent/MobileNavbar/Nav";
import Signup from "./components/MobileComponent/Signup/Signup";
import Grid from "./components/MobileComponent/Grid/Grid";
import Component from './components/MobileComponent/Component/Component'
import useWindowSize from "./components/Hooks/useWindowSize";
import Scroller from "./components/Scroller/Scroller";
import Watinav from "./components/Watinav/Navbar";


const App = () => {

 const {width} = useWindowSize();
 const isDesktop = width > 768;

  return (
    <div>      
            {isDesktop ? <Watinav/> : <Nav />} 
            {isDesktop ? <Main /> : <Signup />}
            {isDesktop ? <Carousel /> : <Grid />}
            {isDesktop ? <Features /> : <Component />}
            {isDesktop ? <Section /> : null } 
            {isDesktop ? <Scroller /> : null } 
            <Footer/> 
          
    </div>
  );
};

export default App;
