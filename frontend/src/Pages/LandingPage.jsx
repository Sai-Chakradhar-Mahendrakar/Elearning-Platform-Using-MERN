import React, { useEffect } from "react";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Section1 from "./LandingPageComponents/Section1";
import Section2 from "./LandingPageComponents/Section2";
import Section5 from "./LandingPageComponents/Section5";
import Section6 from "./LandingPageComponents/Section6";
import LandingPageCarousel from "./LandingPageComponents/LandingPageCarousel";

const LandingPage = () => {



   
  return (
    <Flex direction={"column"}>
      <Navbar />
      <Section1 />
      <Section2 />
      <LandingPageCarousel />
      <Section5 />
      <Section6 />
      <Footer />

    </Flex>
  );
};

export default LandingPage;
