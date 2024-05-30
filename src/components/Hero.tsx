import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full h-full gap-60 text-white absolute mt-16">
        <div className="">social</div>
        <div className="">
          <span className="text-orange-400">A Hiking guide</span>
          <h1 className="text-6xl ">
            Be Prepared Tor The Mountains And Beyond
          </h1>
        </div>
        <div className="">pagination</div>
      </div>
      <img src="/img/BG.png" alt="" className="-z-40 mt-32" />
    </>
  );
};
export default Hero;
