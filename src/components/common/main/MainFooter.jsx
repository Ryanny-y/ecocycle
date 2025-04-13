import { Link } from "react-router";
import { FaInfoCircle, FaMapMarkerAlt, FaComments, FaHandshake } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center xs:flex-row xs:justify-evenly xs:items-start">
          <div className="text-center flex flex-col items-center flex-1 gap-10">
            <Link
              to="/"
              className="text-white flex gap-2 sm:gap-5 items-center outline-none h-20"
            >
              <img
                src="/landing/qc_logo.png"
                alt="QC Logo"
                className="h-full w-full"
              />

              <img
                src="/logos/logo.png"
                alt="Eco-Cycle Logo"
                className="h-full w-full"
              />
            </Link>

            <p className="text-lg">🌱 "Eco-Cycle: Turning Waste Into Worth."</p>
          </div>

          <div className="text-center flex-1">
            <h1>
              <b>Waste Management Links</b>
            </h1>
            <ul className="list-none p-0">
              <li className="text-white my-[10px] text-[13px] hover:text-[#32CD32] hover:cursor-pointer">
                <FaInfoCircle className="inline-block mr-2 transition-colors duration-300 ease-in-out" />
                Recycling Guidelines
              </li>
              <li className="text-white my-[10px] text-[13px] hover:text-[#32CD32] hover:cursor-pointer">
                <FaMapMarkerAlt className="inline-block mr-2 transition-colors duration-300 ease-in-out" />
                Collection Centers
              </li>
              <li className="text-white my-[10px] text-[13px] hover:text-[#32CD32] hover:cursor-pointer">
                <FaComments className="inline-block mr-2 transition-colors duration-300 ease-in-out" />
                Community Forum
              </li>
              <li className="text-white my-[10px] text-[13px] hover:text-[#32CD32] hover:cursor-pointer">
                <FaHandshake className="inline-block mr-2 transition-colors duration-300 ease-in-out" />
                Partner With Us
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-none bg-[#b5b5b5] h-[1px] my-[30px]" />
        <p className="text-center pt-[15px]">
          &copy; 2025 Basura Eco-Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
