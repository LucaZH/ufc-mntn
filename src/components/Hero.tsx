import { FC } from "react";
import Social from "./ui/Social";
import Pagination from "./ui/Pagination";
import CusttomText from "./ui/CustomText";
const Hero: FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full h-full gap-60 text-white absolute mt-16 px-16">
        <Social />
        <div>
          <CusttomText text="A HIKING GUIDE" />
          <h1 className="text-6xl ">
            Be Prepared Tor The Mountains And Beyond
          </h1>
        </div>
        <Pagination />
      </div>
      <img src="/img/BG.png" alt="" className="-z-40 mt-52" />
    </>
  );
};
export default Hero;
