import { FC } from "react";

const Num: FC<{ n: string }> = ({ n }) => {
  return (
    <h1 className="text-9xl text-white opacity-15 font-black absolute -top-16">
      {n}
    </h1>
  );
};

export default Num;
