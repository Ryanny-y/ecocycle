import { Link } from "react-router";
import { FaRecycle, FaExchangeAlt } from "react-icons/fa";
import useScrollTop from '../../utils/hooks/useScrollTop';

const Landing = () => {

  useScrollTop();

  return (
    <main className="flex flex-col gap-10 mb-10">
      <section id="hero" className="bg-[url('/landing/hero_bg.jpg')] bg-no-repeat bg-top bg-cover h-[80svh] grid place-items-center relative">
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 opacity-30"></div>

        <div className="container mx-auto flex flex-col items-center gap-5 text-center relative text-white">
          <h1 className="font-bold text-3xl md:text-5xl">WELCOME TO ECOCYCLE</h1>
          <p className="max-w-[800px] font-semibold">Join the movement towards a sustainable future. Trade your recyclable materials for points and use them to shop for eco-friendly products. Together, we can make a positive impact on the planet—one trade at a time!</p>
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
    </main>
  );
};

export default Landing;
