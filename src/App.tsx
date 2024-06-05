import { useState, useEffect } from "react";
import Articls from "./components/Articls";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pagination from "./components/ui/Pagination";

function App() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = Math.floor(window.scrollY / 600) + 1;
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Pagination activeSection={activeSection} />
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
        <Articls />
      </div>
    </>
  );
}
export default App;
