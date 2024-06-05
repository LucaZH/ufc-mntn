function Pagination({ activeSection }: { activeSection: number }) {
  return (
    <div className="hidden lg:flex md:flex flex-col gap-1 text-right fixed right-16 top-1/3 text-white">
      <p
        className={`border-r-2 pr-3 transition-all duration-300 ${
          activeSection === 1 ? "border-r-4" : ""
        }`}
      >
        Start
      </p>
      <p
        className={`border-r-2 pr-3 transition-all duration-300 ${
          activeSection === 2 ? "border-r-4" : ""
        }`}
      >
        01
      </p>
      <p
        className={`border-r-2 pr-3 transition-all duration-300 ${
          activeSection === 3 ? "border-r-4" : ""
        }`}
      >
        02
      </p>
      <p
        className={`border-r-2 pr-3 transition-all duration-300 ${
          activeSection === 4 ? "border-r-4" : ""
        }`}
      >
        03
      </p>
    </div>
  );
}
export default Pagination;
