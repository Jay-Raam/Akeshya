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

const CardContent = ({
  title,
  describe,
}: {
  title: string;
  describe: string;
}) => {
  return (
    <div className="content flex-wrap" data-aos="fade-up" data-aos-delay="100">
      <h2
        className={`${raleway.className} title-for-card text-[18px] font-bold text-black mb-[14px] text-center`}
      >
        {title}
      </h2>
      <p
        className={`${openSans.className} des-for-card text-[14px] lg:text-[16px] text-black`}
      >
        {describe}
      </p>
    </div>
  );
};

const Card = ({
  id,
  title,
  describe,
}: {
  id: number;
  title: string;
  describe: string;
}) => {
  return (
    <div className="card-01 w-[300px] lg:w-[434px] xl:w-[500px] p-[20px] rounded-[4px]">
      <div className="container  mx-auto my-0">
        <CardContent title={`${id}. ${title}`} describe={describe} />
      </div>
    </div>
  );
};

const Dataprocess = [
  {
    id: 1,
    title: "Planning",
    describe:
      "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
  },
  {
    id: 2,
    title: "Design",
    describe:
      "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
  },
];

const DataprocessSecondary = [
  {
    id: 3,
    title: "Development",
    describe:
      "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
  },
  {
    id: 4,
    title: "Marketing",
    describe:
      "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune record of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
  },
];

const OurProcessComponent = () => {
  return (
    <>
      <div className="our-process max-w-[1220px] mx-auto my-0 mt-16">
        <div className="container  mx-auto my-0">
          <div className="title" data-aos="fade-up">
            <h1
              className={`${raleway.className} text-[23px] lg:text-[34px] uppercase text-black font-bold mb-3 line-before-after text-center`}
            >
              Our Process
            </h1>

            <p
              className={`text-primary-middle text-[16px] ${openSans.className} text-center`}
            >
              Over the years we’ve evolved a tested method for attaining success
              for each one of our clients.
            </p>
          </div>
          <div className="cards-01 max-w-[1200px] mx-auto my-0 flex flex-col justify-center items-center mt-[30px] gap-[67px]">
            <div
              className="flex justify-center items-center gap-[8rem] flex-wrap md:flex-nowrap md:mx-auto md:my-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {Dataprocess.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  describe={item.describe}
                />
              ))}
            </div>
            <div
              className="flex justify-center items-center gap-[8rem] flex-wrap md:flex-nowrap md:mx-auto md:my-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {DataprocessSecondary.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  describe={item.describe}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcessComponent;
