import { RiCheckDoubleLine } from "react-icons/ri";
import "./animation.css";
import { Open_Sans, Raleway } from "@next/font/google";

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

const AboutComponent = () => {
  const about = [
    "We started with a simple idea: do what is best for the client.",
    "Our methodical and individual approach to each project delivers the finest possible results for your media.",
    "Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.",
  ];

  return (
    <div className="About max-w-[1200px] mx-auto my-0" id="#about">
      <div className="container mx-auto my-0 mt-[7.5rem]">
        <h1
          className={`${raleway.className} text-[32px] uppercase text-black font-bold mb-3 line-before-after text-center`}
          data-aos="fade-up"
        >
          About
        </h1>
        <div className="text flex flex-col lg:flex-row justify-center items-baseline gap-9 max-w-[1220px] mx-auto my-0 lg:gap-7 md:gap-9 ">
          <div
            className="text-01 flex flex-col justify-center items-baseline lg:items-baseline gap-5 lg:w-[50%]"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p
              className={`text-primary-middle text-[16px] ${openSans.className}`}
            >
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            {about.map((item, index) => (
              <p
                key={index}
                className={`text-primary-middle text-[16px] ${openSans.className}`}
              >
                <RiCheckDoubleLine className="inline mr-2 text-primary-dark text-[20px]" />
                {item}
              </p>
            ))}
          </div>
          <div
            className="text-02 flex flex-col justify-center items-center lg:items-start gap-5 lg:w-[50%]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p
              className={`text-primary-middle text-[16px] ${openSans.className}`}
            >
              We are professional, but we are also friendly, and we will always
              pay attention to your concerns. We expect to work with innovative
              people that have an open mind and are dedicated to making every
              idea a reality. We want to hear from you if you are interested in
              SEO, have Web Development ideas, or require a graphic designer who
              can match your goals.
            </p>
            <button
              type="button"
              className={`${raleway.className} font-medium text-base inline-block px-[30px] py-[10px] rounded-[50px] cursor-pointer outline-primary-dark outline-1 text-primary-dark border-solid border-[2px] border-primary-dark hover:bg-primary-dark hover:text-white `}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
