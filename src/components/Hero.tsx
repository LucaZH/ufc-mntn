import { FC } from "react";
import Social from "./ui/Social";
import CusttomText from "./ui/CustomText";
const Hero: FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full h-full gap-60 text-white absolute mt-[10%] px-10 md:px-16 lg:px-16">
        <Social />
        <div className="ml-[20%]">
          <CusttomText text="A HIKING GUIDE" />
          <h1 className="font-serif text-5xl md:w-9/12 md:text-6xl">
            Be Prepared Tor The Mountains And Beyond
          </h1>
        </div>
      </div>
      <img
        src="/img/BG.png"
        alt=""
        className="-z-40 mt-52 object-cover w-screen"
      />
    </>
  );
};
export default Hero;
