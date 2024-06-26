import { FC } from "react";

const CustomText: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex text-cyellow items-center gap-4 text-sm">
      <svg
        width="72"
        height="2"
        viewBox="0 0 72 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="72" height="2" fill="#FBD784" />
      </svg>
      <span className="font-semibold font-mono">{text}</span>
    </div>
  );
};

export default CustomText;
