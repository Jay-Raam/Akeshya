"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image001 from "../image/counts-img.svg";
import Image from "next/image";
import { Open_Sans, Raleway } from "@next/font/google";
import {
  BsJournalRichtext,
  BsEmojiSmile,
  BsClock,
  BsGlobe,
} from "react-icons/bs";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const ClientComponent = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="client flex justify-center  overflow-hidden  items-center gap-[4.25rem] mt-[7rem] max-w-[1220px] mx-auto my-0 lg:flex-row lg:flex-nowrap flex-wrap md:flex-col sm:flex-col">
          <div className="image flex justify-center items-center gap-4 lg:w-[40%] sm:w-[100%]">
            <Image
              src={Image001}
              alt="client-logo-01"
              className="h-auto w-full"
              data-aos="fade-top"
              data-aos-delay="150"
            />
          </div>
          <div
            className="flex justify-between items-center gap-6 lg:w-[60%] sm:w-[100%] lg:flex-nowrap lg:flex-row flex-wrap overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex lg:flex-col justify-between items-start md:items-center w-full mx-auto my-0 flex-col gap-8">
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-3">
                  <BsEmojiSmile className="text-primary-dark text-[36px]" />
                  {counterOn && (
                    <CountUp
                      className={`${openSans.className} text-[36px] text-black font-bold`}
                      start={383500}
                      end={3835039}
                      duration={2}
                      delay={0}
                    />
                  )}
                </div>
                <p
                  className={`${raleway.className} font-bold text-[14px] ml-[2.5rem] text-black`}
                >
                  Organic Reach{" "}
                  <span className="font-normal text-primary-middle">
                    (Global)
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:mr-[55px]">
                <div className="flex justify-center items-center gap-3">
                  <BsClock className="text-primary-dark text-[36px]" />
                  {counterOn && (
                    <CountUp
                      className={`${openSans.className} text-[36px] text-black font-bold`}
                      start={14000}
                      end={14081}
                      duration={2}
                      delay={0}
                    />
                  )}
                </div>
                <p
                  className={`${raleway.className} font-bold text-[14px] ml-[2.5rem] text-black`}
                >
                  Watch Hours <span className="font-normal">(Asia)</span>
                </p>
              </div>
            </div>
            <div className="flex lg:flex-col justify-between items-start md:items-center w-full mx-auto my-0 flex-col gap-8">
              <div className="flex flex-col md:mr-[98px]">
                <div className="flex justify-center items-center gap-3">
                  <BsJournalRichtext className="text-primary-dark text-[36px]" />
                  {counterOn && (
                    <CountUp
                      className={`${openSans.className} text-[36px] text-black font-bold`}
                      start={0}
                      end={85}
                      duration={2}
                      delay={0}
                    />
                  )}
                </div>
                <p
                  className={`${raleway.className} font-bold text-[14px] ml-[2.5rem] text-black`}
                >
                  Campaigns
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-start items-center gap-3">
                  <BsGlobe className="text-primary-dark text-[36px]" />
                  {counterOn && (
                    <CountUp
                      className={`${openSans.className} text-[36px] text-black font-bold`}
                      start={0}
                      end={17}
                      duration={2}
                      delay={0}
                    />
                  )}
                </div>
                <p
                  className={`${raleway.className} font-bold text-[14px] ml-[2.5rem] text-black`}
                >
                  Excellent CTR <span className="font-normal">% (Asia)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default ClientComponent;
