import Arcticle from "./ui/Article";

function Articls() {
  const articleItems = [
    {
      id: "01",
      span: "GET STARTED",
      title: "What level of hiker are you?",
      desc: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
      link: "#link",
      reversed: false,
      img: "/img/01.png",
    },
    {
      id: "02",
      span: "HKING ESSENTIALS",
      title: "Picking the right gear!",
      desc: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      link: "#link",
      reversed: true,
      img: "/img/01(1).png",
    },
    {
      id: "03",
      span: "WHERE YOU GO IS THE KEY",
      title: "Undestand Your Map & Timing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi nesciunt explicabo aliquam quo atque voluptates sit modi alias, libero recusandae natus incidunt? Velit quis molestias ex, a saepe omnis?To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
      link: "#link",
      reversed: false,
      img: "/img/01(2).png",
    },
  ];
  return (
    <section>
      {articleItems.map((item) => (
        <Arcticle
          id={item.id}
          span={item.span}
          title={item.title}
          desc={item.desc}
          link={item.link}
          reversed={item.reversed}
          img={item.img}
        />
      ))}
    </section>
  );
}
export default Articls;
