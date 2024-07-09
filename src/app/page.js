"use client"

import Hero from "./components/hero";
import Process from "./components/process";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Member from "./components/memeber";
import Faqs from "./components/faqs";
import Locate from "./components/locate";
import Footer from "./components/footer";


import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Home() {


  useEffect(() => {
    AOS.init({
      // You can add global settings here
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
     
    });
  }, []);
  return (
 <>
 <Hero/>
 <Process/>
 <Services/>
 <Pricing/>
 <Member/>
 <Faqs/>
 <Locate/>
 <Footer/>


 </>
  );
}
