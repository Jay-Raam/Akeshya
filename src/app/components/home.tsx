"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeComponent from "./hero";
import AboutComponent from "./about";
import ClientComponent from "./client";
import ServiceComponent from "./service";
import ProcessComponent from "./process";
import FeatureComponent from "./feature";
import ContactComponent from "./contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <HomeComponent />
      <AboutComponent />
      <ClientComponent />
      <ServiceComponent />
      <ProcessComponent />
      <FeatureComponent />
      <ContactComponent />
    </>
  );
}
