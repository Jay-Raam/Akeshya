import { Open_Sans, Raleway } from "@next/font/google";
import Link from "next/link";
import {
  RiWindowLine,
  RiCodeBoxLine,
  RiAdvertisementFill,
  RiPlayCircleFill,
  RiSearchEyeLine,
  RiTodoLine,
  RiMapPinLine,
  RiBarChartGroupedLine,
  RiContactsBookLine,
  RiDiscLine,
  RiCalendarEventFill,
  RiCreativeCommonsByLine,
} from "react-icons/ri";

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

const Data = [
  "Web design",
  "Development",
  "Branding",
  "Media buying",
  "Search engine",
  "Brand strategy",
  "Local search marketing",
  "Lead Tracking & Management",
  "Contact management",
  "Media management",
  "Social scheduling",
  "Ad retargeting",
];

const OurFeatureComponent = () => {
  return (
    <>
      <div className="our-feature max-w-[1220px] mx-auto my-0 mt-[8rem] mb-[8rem]">
        <div className="container  mx-auto my-0">
          <div className="title" data-aos="fade-up">
            <h1
              className={`${raleway.className} text-[24px] uppercase text-black font-bold mb-3 line-before-after text-center`}
            >
              OUR CORE FEATURES
            </h1>

            <p
              className={`text-primary-middle text-[16px] ${openSans.className} text-center`}
            >
              Akeshya is a forward-thinking and intelligent design firm that is
              technically and creatively capable of transforming your brand into
              its best digital self. Our approach to design and development
              results in compelling, engaging branding and immersive digital
              experiences that provide a value for money.
            </p>
          </div>
        </div>
        <div className="icon max-w-[1220px] flex flex-wrap justify-center items-center gap-6 mt-[4rem]" data-aos="fade-up" data-aos-delay="300">
          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiWindowLine className="text-primary-one text-[32px] ml-8" />
            <h1
              className={`text-black  text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[0]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiCodeBoxLine className="text-primary-two text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[1]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiCreativeCommonsByLine className="text-primary-eleven text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[2]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiPlayCircleFill className="text-primary-four text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[3]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiSearchEyeLine className="text-primary-five text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[4]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiTodoLine className="text-primary-six text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[5]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiMapPinLine className="text-primary-seven text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[6]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiBarChartGroupedLine className="text-primary-eight text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[7]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiContactsBookLine className="text-primary-nine text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[8]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiDiscLine className="text-primary-ten text-[32px] ml-8" />

            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[9]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiCalendarEventFill className="text-primary-eleven text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[10]}
            </h1>
          </Link>

          <Link
            href="/"
            className="flex justify-start items-center gap-3 w-full md:w-auto lg:w-[23%] mb-[22px]"
          >
            <RiAdvertisementFill className="text-primary-twelve text-[32px] ml-8" />
            <h1
              className={`text-black text-[16px] ${raleway.className} hover:text-primary-dark cursor-pointer font-bold`}
            >
              {Data[11]}
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurFeatureComponent;
