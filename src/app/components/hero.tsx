import Image001 from "../image/hero-img.png";
import Image002 from "../image/clients/client-1.png";
import Image003 from "../image/clients/client-2.png";
import Image004 from "../image/clients/client-3.png";
import Image005 from "../image/clients/client-4.png";
import Image006 from "../image/clients/client-5.png";
import Image007 from "../image/clients/client-6.png";
import Image from "next/image";
import { Raleway } from "@next/font/google";
import "./animation.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const HomeComponent = () => {
  return (
    <>
      <div
        className={`home bg-white flex max-w-[1200px] mt-[8.5rem] overflow-hidden justify-center items-center gap-[5rem] mx-auto my-0 flex-wrap lg:flex-row lg:flex-nowrap flex-col-reverse`}
      >
        <div className="text">
          <h1
            className={`${raleway.className} text-[28px] lg:text-[48px] lg:w-[556px] mb-[10px] font-semibold text-primary-dark`}
            data-aos="fade-up"
          >
            Grow your business with Akeshya
          </h1>
          <p
            className={`${raleway.className} mb-[50px] text-[18px] lg:text-[24px] text-primary-middle`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We are team of talented website designers, <br />
            developers & digital marketeers
          </p>
          <button
            type="button"
            className={`${raleway.className} font-medium text-base inline-block px-[30px] py-[10px] rounded-[50px] cursor-pointer outline-primary-dark outline-1 text-primary-dark border-solid border-[2px] border-primary-dark hover:bg-primary-dark hover:text-white `}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Get Started
          </button>
        </div>
        <div className="image-in-hero overflow-hidden" data-aos="fade-left">
          <Image
            src={Image001}
            alt="hero-image"
            className="w-full overflow-hidden lg:w-[525px] flex justify-center items-center animation"
          />
        </div>
      </div>
      <div className="client-logo w-full flex justify-center items-center mt-12 gap-[4.75rem] flex-wrap max-w-[1220px] mx-auto my-0">
        <Image
          src={Image002}
          alt="client-logo-01"
          className="h-auto w-[100px] grayscale hover:grayscale-0"
        />
        <Image
          src={Image003}
          alt="client-logo-02"
          className="h-auto w-[100px] grayscale hover:grayscale-0"
        />
        <Image
          src={Image004}
          alt="client-logo-03"
          className="h-auto w-[100px] grayscale hover:grayscale-0"
          data-aos="zoom-in"
        />
        <Image
          src={Image005}
          alt="client-logo-04"
          className="h-auto w-[100px] grayscale hover:grayscale-0"
        />
        <Image
          src={Image006}
          alt="client-logo-05"
          className="h-auto w-[100px] grayscale hover:grayscale-0"
          data-aos="zoom-in"
        />
        <Image
          src={Image007}
          alt="client-logo-06"
          className="h-auto w-[100px] grayscale hover:grayscale-0"
        />
      </div>
    </>
  );
};

export default HomeComponent;
