function Footer() {
  return (
    <footer className="text-white pb-10 px-14 md:px-36">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">MNTN</h2>
          <p className="mt-4">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="mt-4 text-gray-400">
            &copy; 2023 MNTN, Inc.{" "}
            <a href="#" className="text-white">
              Terms & Privacy
            </a>
          </p>
        </div>
        <div className="flex gap-8 md:gap-44 lg:gap-60">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-cyellow">More on The Blog</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  About MNTN
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Contributors & Writers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Write For Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-cyellow">More on MNTN</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  The Team
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
