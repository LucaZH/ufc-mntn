import CustomText from "./CustomText";
import Num from "./Num";

function Arcticle({
  id,
  span,
  title,
  desc,
  link,
  reversed,
  img,
}: {
  id: string;
  span: string;
  title: string;
  desc: string;
  link: string;
  reversed: boolean;
  img: string;
}) {
  return (
    <div
      className={`space-y-10 px-14 mb-32 text-white md:flex md:justify-center md:gap-20 md:space-y-0 lg:md:space-y-0 md:px-36 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative mt-20">
        <Num n={id} />
        <div className="ml-16">
          <CustomText text={span} />
          <h2 className="text-2xl font-semibold mt-2 font-serif">{title}</h2>
          <p className="mt-4">{desc}</p>
          <a
            href={link}
            className="text-cyellow font-semibold font-mono text-sm mt-4 flex items-center gap-2 w-fit"
          >
            Read more
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-4"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#FBD784"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <img src={img} className="w-11/12 h-4/5" />
    </div>
  );
}
export default Arcticle;
