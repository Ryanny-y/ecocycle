import { Link } from "react-router";
import { FaRecycle, FaExchangeAlt, FaInfoCircle, FaMapMarkerAlt, FaComments, FaHandshake } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <header className="bg-[#4a814e]">
        <div className="container mx-auto flex justify-between items-center py-2">
          <Link to='/' className="flex items-center gap-2 text-white outline-none">
            <img src="/logos/logo.png" alt="Eco-Cycle Logo" className="h-16 w-16"/>
            <p className="font-bold text-2xl">Eco-Cycle</p>
          </Link>

          <Link to='/'>
            <img src="/landing/qc_logo.png" alt="QC Logo" className="h-16 w-16 outline-none" />
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-20">
        <section id="hero" className="bg-[url('/landing/hero_bg.jpg')] bg-no-repeat bg-top bg-cover h-[80svh] grid place-items-center relative">
          <div className="bg-black absolute top-0 right-0 left-0 bottom-0 opacity-30"></div>

          <div className="container mx-auto text-center relative">
            <h1 className="text-white font-bold text-3xl md:text-5xl">WELCOME TO ECOCYCLE</h1>
          </div>
        </section>
          
        <section className="container mx-auto flex flex-col justify-center gap-y-[30px] items-center">
          <h2 className="font-bold text-2xl text-center">
            ♻️ Explore Our Eco-Friendly Initiatives
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            {/* BASURA-ECO HUB */}
            <Link
              to='/ecohub'
              className="relative h-[200px] w-[200px] xs:w-[250px] xs:h-[250px] flex flex-col items-center justify-center text-center text-[18px] font-bold text-[#224b6c] bg-white border-4 border-[#32CD32] rounded-[10px] no-underline overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#32CD32] hover:text-white group gap-3 outline-none"
            >
              <img
                src="/logos/basura_eco_hub.png"
                className="absolute inset-0 w-full h-full object-cover scale-0 opacity-0 transition duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 bg-white z-20"
                alt="Basura-Eco Hub Logo"
              />

              <FaRecycle className="z-10 transition-opacity duration-300 group-hover:opacity-0 text-5xl" />
              <span className="z-10">BASURA-ECO HUB</span>
            </Link>

            {/* ECO-SWAP */}
            <Link
              to="/ecoswap"
              className="relative h-[200px] w-[200px] xs:w-[250px] xs:h-[250px] flex flex-col items-center justify-center text-center text-[18px] font-bold text-[#224b6c] bg-white border-4 border-[#32CD32] rounded-[10px] no-underline overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#32CD32] hover:text-white group gap-3 outline-none"
            >
              <img
                src="/landing/ecoswap.png"
                className="absolute inset-0 w-full h-full object-cover scale-0 opacity-0 transition duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 bg-white z-20"
                alt="Eco-Swap Logo"
              />
              <FaExchangeAlt className="z-10 transition-opacity duration-300 group-hover:opacity-0 text-5xl" />
              <span className="z-10">ECO-SWAP</span>
            </Link>
          </div>
        </section>

        <footer className="bg-black text-white py-10">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10 items-center xs:flex-row xs:justify-evenly xs:items-start">
              <div className="text-center flex flex-col items-center flex-1 gap-10">
                <Link to="/" className="text-white flex gap-2 sm:gap-5 items-center outline-none h-20">
                  <img src="/landing/qc_logo.png" alt="QC Logo" className="h-full w-full" />

                  <img src="/logos/logo.png" alt="Eco-Cycle Logo" className="h-full w-full" />
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
            <p className="text-center pt-[15px]">&copy; 2025 Basura Eco-Hub. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Landing;
