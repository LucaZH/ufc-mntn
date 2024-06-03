import CustomText from "./ui/CustomText";
import Num from "./ui/Num";

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
    <section
      className={`space-y-10 px-14 mb-32 text-white md:flex md:justify-center md:gap-20 md:space-y-0 lg:md:space-y-0 md:px-56${
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
            className="text-[#FBD784] font-semibold font-mono text-sm mt-4 block"
          >
            Read more
          </a>
        </div>
      </div>
      <img src={img} className="w-11/12 h-4/5" />
    </section>
  );
}
export default Arcticle;
