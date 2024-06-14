import { Open_Sans } from "@next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const data = ["Terms and conditions", "Refund policy", "Privacy policy"];

const copyRightComponent = () => {
  return (
    <>
      <div className="copyright pb-10 max-w-[1200px] mx-auto my-0">
        <div className={`${openSans.className} container flex justify-between items-center flex-col gap-5 mt-11 md:flex-row `}>
          <div className="text md:ml-11 lg:ml-[6rem]">
            <h1 className="text-black text-center">
              © Copyright
              <span className="font-bold text-primary-dark ml-1">Akeshya.</span> All
              Rights Reserved
            </h1>
          </div>
          <div className="copyright-list flex justify-center items-center gap-11 md:mr-9 lg:mr-20">
            {data.map((item, index) => {
              return (
                <Link href="/" key={index}>
                  <p
                    className={`${openSans.className} text-[14px] text-primary-dark hover:text-primary-light cursor-pointer`}
                  >
                    {item}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default copyRightComponent;
