import { Open_Sans, Raleway } from "@next/font/google";
import "./animation.css";
import { BsDribbble } from "react-icons/bs";
import { BiFile, BiWorld, BiTachometer } from "react-icons/bi";

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

const data = [
  {
    id: 1,
    icon: <BsDribbble className="text-[36px] text-white" />,
    title: "Digital Marketing",
    description:
      "Our digital marketing services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    aosDelay: 100,
  },
  {
    id: 2,
    icon: <BiFile className="text-[36px] text-white" />,
    title: "Web Development",
    description:
      "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    aosDelay: 200,
  },
  {
    id: 3,
    icon: <BiWorld className="text-[36px] text-white" />,
    title: "Marketing",
    description:
      "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    aosDelay: 300,
  },
  {
    id: 4,
    icon: <BiTachometer className="text-[36px] text-white" />,
    title: "Optimization",
    description:
      "Since the beginning, we at Akeshya have specialized in website maintenance. We recognize the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
    aosDelay: 400,
  },
];

const ServiceComponent = () => {
  return (
    <div className="service mt-24 max-w-[1220px] mx-auto my-0" id="service">
      <div className="container  mx-auto my-0">
        <div className="title" data-aos="fade-up">
          <h1
            className={`${raleway.className} text-[32px] uppercase text-black font-bold mb-3 line-before-after text-center`}
          >
            Service
          </h1>
          <p
            className={`${openSans.className} text-[14px] text-center text-primary-middle`}
          >
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </p>
        </div>
        <div className="cards mt-14 flex flex-col mx-auto my-0 max-w-[1220px] gap-[2.5rem] lg:flex-row lg:flex-nowrap md:flex-wrap md:flex-row md:justify-center md:gap-4">
          {data.map((item) => (
            <div
              className="card hover-effect-001 flex w-[300px] mx-auto my-0 justify-center items-start p-[30px] lg:w-[442px] relative overflow-hidden rounded-[3px]"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
            >
              <div className="container">
                <div className="icon w-[60px] h-[60px] mb-[20px] bg-primary-dark rounded-[50%] flex justify-center items-center ">
                  <span className="hover-icon"> {item.icon}</span>
                </div>
                <div className="content">
                  <h2
                    className={`${raleway.className} text-[18px] font-bold text-black mb-[20px]`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`${openSans.className} text-[15px] text-primary-middle`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
