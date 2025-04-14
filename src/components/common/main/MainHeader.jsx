import { Link } from "react-router";

const MainHeader = () => {
  return (
    <header className="bg-[#4a814e] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-0">
        <Link to='/' className="flex items-center gap-2 text-white outline-none">
          <img src="/logos/logo.png" alt="Eco-Cycle Logo" className="h-16 w-16"/>
          <p className="font-bold text-2xl">Eco-Cycle</p>
        </Link>

        <Link to='/'>
          <img src="/landing/qc_logo.png" alt="QC Logo" className="h-16 w-16 outline-none" />
        </Link>
      </div>
    </header>
  )
};

export default MainHeader;
