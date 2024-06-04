import Arcticle from "./ui/Article";

function Articls() {
  const articleItems = [
    {
      id: "01",
      span: "GET STARTED",
      title: "What level of hiker are you?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi nesciunt explicabo aliquam quo atque voluptates sit modi alias, libero recusandae natus incidunt? Velit quis molestias ex, a saepe omnis?",
      link: "#link",
      reversed: false,
      img: "/img/01.png",
    },
    {
      id: "02",
      span: "HKING ESSENTIALS",
      title: "Picking the right gear!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi nesciunt explicabo aliquam quo atque voluptates sit modi alias, libero recusandae natus incidunt? Velit quis molestias ex, a saepe omnis?",
      link: "#link",
      reversed: true,
      img: "/img/01(1).png",
    },
    {
      id: "03",
      span: "WHERE YOU GO IS THE KEY",
      title: "Undestand Your Map & Timing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi nesciunt explicabo aliquam quo atque voluptates sit modi alias, libero recusandae natus incidunt? Velit quis molestias ex, a saepe omnis?",
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
