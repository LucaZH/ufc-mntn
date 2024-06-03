import Arcticle from "./components/Article";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pagination from "./components/ui/Pagination";

function App() {
  return (
    <>
      <Pagination />
      <div>
        <img
          src="/img/HG.png"
          className="w-full h-96 md:h-full absolute -z-50 cloud"
        />
        <svg
          width="100%"
          height="1200"
          viewBox="0 0 100% 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-40"
        >
          <rect width="100%" height="1200" fill="url(#paint0_linear_11_94)" />
          <defs>
            <linearGradient
              id="paint0_linear_11_94"
              x1="1015.5"
              y1="937.5"
              x2="550"
              y2="-365"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0B1D26" stop-opacity="0" />
              <stop offset="1" stop-color="#0B1D26" />
            </linearGradient>
          </defs>
        </svg>
        <Navbar />
        <Hero />
      </div>
      <div className="md:-mt-80">
        {" "}
        <Arcticle
          id="01"
          span="01"
          title="What level of hiker are you?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi nesciunt explicabo aliquam quo atque voluptates sit modi alias, libero recusandae natus incidunt? Velit quis molestias ex, a saepe omnis?"
          link="#link"
          reversed={false}
          img="/img/01.png"
        />
        <Arcticle
          id="01"
          span="01"
          title="What level of hiker are you?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, animi nesciunt explicabo aliquam quo atque voluptates sit modi alias, libero recusandae natus incidunt? Velit quis molestias ex, a saepe omnis?"
          link="#link"
          reversed={true}
          img="/img/01(1).png"
        />
      </div>
    </>
  );
}
export default App;
