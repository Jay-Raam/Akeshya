import { Open_Sans, Raleway } from "@next/font/google";
import { RiMapPinLine, RiMailSendLine, RiPhoneLine } from "react-icons/ri";

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

const contactComponent = () => {
  return (
    <>
      <div className="contact max-w-[1220px] mx-auto my-0 mt-16" id="contact">
        <div className="container mx-auto my-0">
          <div className="title" data-aos="fade-up">
            <h1
              className={`${raleway.className} text-[24px] lg:text-[34px] uppercase text-black font-bold mb-3 line-before-after text-center`}
            >
              Contact
            </h1>

            <p
              className={`text-primary-middle text-[16px] ${openSans.className} text-center`}
            >
              Over the years we’ve evolved a tested method for attaining success
              for each one of our clients.
            </p>
          </div>
          <div className="contact-content flex flex-col flex-wrap md:flex-row gap-9 mt-10 md:justify-center lg:flex-nowrap mx-auto my-0">
            <div className="contact-logo md:w-[47%] lg:w-full" data-aos="fade-up" data-aos-delay="100">
              <h1 className="font-bold text-primary-dark text-2xl md:text-3xl">
                Akeshya
              </h1>
              <p className="text-sm md:text-base text-primary-middle">
                Designers, developers & marketeers capable of delivering
                solutions according to your needs,
              </p>
            </div>
            <div className="address md:w-[48%] flex flex-col gap-4 lg:w-full" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-5">
                <RiMapPinLine className="text-primary-dark text-3xl md:text-4xl" />
                <p className="text-sm md:text-base text-primary-middle">
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>
              <div className="flex items-center gap-5">
                <RiMailSendLine className="text-primary-dark text-2xl md:text-3xl" />
                <p className="text-sm md:text-base text-primary-middle">
                  info@akeshya.com
                </p>
              </div>
              <div className="flex items-center gap-5">
                <RiPhoneLine className="text-primary-dark text-2xl md:text-3xl" />
                <p className="text-sm md:text-base text-primary-middle">
                  +91 94942 40922
                </p>
              </div>
            </div>
            <div className="contact-form mx-auto my-0 w-[95%] flex flex-col gap-4 lg:w-full" data-aos="fade-up" data-aos-delay="300">
              <div className="form-group w-full mx-auto my-0">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md text-base text-primary-middle border-primary-bordercolor"
                  placeholder="Name"
                />
              </div>
              <div className="form-group w-full mx-auto my-0">
                <input
                  type="email"
                  className="w-full p-2 border rounded-md text-base text-primary-middle border-primary-bordercolor"
                  placeholder="Email"
                />
              </div>
              <div className="form-group w-full mx-auto my-0">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md text-base text-primary-middle border-primary-bordercolor"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group w-full mx-auto my-0">
                <textarea
                  className="w-full p-2 border rounded-md text-base text-primary-middle border-primary-bordercolor"
                  placeholder="Message"
                  rows={5}
                ></textarea>
              </div>
              <div className="form-group w-full mx-auto my-0 text-center">
                <button
                  type="submit"
                  className="btn bg-primary-dark text-white rounded-full py-3 px-6 cursor-pointer border-0 hover:bg-primary-light "
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactComponent;
