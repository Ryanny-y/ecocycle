import { useContext, useState } from "react";
import { Link } from "react-router";
import '../../../assets/styles/style.css';
import { FiPackage } from "react-icons/fi";
import { FaHistory, FaRecycle } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import Logout from '../../../pages/auth/Logout';
import { GlobalContext } from "../../../utils/contexts/GlobalProvider";

const DashSideNav = () => {
  const { mobileToggle, setMobileToggle } = useContext(GlobalContext);

  const toggleMenu = (e) => {
    const icon = e.currentTarget.querySelector('.icon');
    const submenu = e.currentTarget?.nextElementSibling;
    icon?.classList.toggle('rotate-180');
    submenu?.classList.toggle('max-h-0');
    submenu?.classList.toggle('max-h-[500px]');
  }

  return (
    <>
      {/* <!-- Mobile Header --> */}
      <div className="flex justify-between items-center lg:hidden py-2 sticky top-0 z-20 bg-forest">
          <Link to='/' className="flex items-center ml-2 mt-2 mb-2">
              <img src="/logos/logo.png" alt="NSTP Logo" className="w-14 object-contain md:w-16"/>
              <h1 className="font-bold ml-2 text-3xl text-white md:text-3xl">Eco-Cycle</h1>
          </Link>

          <button id="menu-toggle" className={`${mobileToggle ? 'hidden' : 'block'} lg:hidden p-2 text-3xl md:text-4xl text-white`} onClick={() => setMobileToggle(true)}>☰</button>
      </div>
    
      <section className="flex flex-col lg:flex-row bg-forest">
        {/* <!-- Overlay (mobile only) --> */}
        <div id="overlay" className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${mobileToggle ? '' : 'hidden'}`} onClick={() => setMobileToggle(false)}></div>


        {/* <!-- Sidebar --> */}
        <nav id="Mobile-menu" className={`fixed
            top-0 left-0
            lg:pt-0
            bottom-0
            overflow-y-auto
            w-4/5
            transform lg:transform-none
            ${mobileToggle ? '' : '-translate-x-full'} lg:translate-x-0
            md:w-3/5
            bg-forest backdrop-blur-sm lg:backdrop-blur-0
            bg-opacity-90 lg:bg-opacity-100
            z-50
            transition-transform duration-300 ease-in-out
            flex flex-col
            lg:w-[300px]
            hide-scrollbar
            `}>
            {/* <!-- Desktop Logo --> */}
            <Link to="/" className="hidden lg:flex items-center p-4 border-b border-white/20">
                <img src="/logos/logo.png" alt="NSTP Logo" className="w-14 object-contain lg:w-20 lg:h-14"/>
                <h1 className="font-bold ml-1 text-2xl text-white lg:text-3xl lg:font-bold">Eco-Cycle</h1>
            </Link>

            {/* <!-- Close Button (mobile only) --> */}
            <div className="flex items-center justify-between lg:hidden py-3 px-4">
              <Link to='/' className="flex items-center">
                  <img src="/logos/logo.png" alt="NSTP Logo" className="h-10 md:h-16"/>
                  <h1 className="font-bold ml-2 n text-2xl text-white md:text-3xl">Eco-Cycle</h1>
              </Link>
              <span id="close-menu" className="text-white text-5xl cursor-pointer" onClick={() => setMobileToggle(false)}>×</span>
            </div>

            {/* <!-- Menu Content --> */}
            <div className="flex flex-col h-full items-center">
              <ul className="flex flex-col text-white w-full px-3">
                  {/* <!-- Overview --> */}
                  <li>
                      <Link to="/admin/overview" className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                          <div className="flex items-center">
                            <div className="h-12 flex items-center">
                              <MdOutlineDashboard className="text-lg md:text-xl w-10 md:w-14 lg:w-16 h-7"/>
                            </div>
                            <p className="text-sm ml-2 md:text-lg">Overview</p>
                          </div>
                      </Link>
                  </li>

                  {/* <!-- Basura-Eco Hub --> */}
                  <li>
                      <div className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                          <div className="flex items-center">
                              <div className="h-12 flex items-center">
                                <img src="/logos/basura_eco_hub.png" alt="" className="w-10 object-contain md:w-14 lg:w-16 md:h-7"/>
                              </div>
                              <p className="text-sm ml-2 md:text-lg">Basura Eco Hub</p>
                          </div>

                          <div className="icon w-8 h-8 md:w-10 md:h-10">
                            <box-icon name="chevron-down" className="w-full h-full" color="white"></box-icon>
                          </div>
                      </div>
                      
                      <div className="submenu overflow-hidden transition-all duration-300 max-h-0">
                          <Link to="/admin/ecohub/create_record" className="block w-full text-sm py-2 pl-16 duration-300 hover:bg-forest-hover md:text-base">Create Record</Link>
                          <Link to="/admin/ecohub/earn_points" className="block w-full text-sm py-2 pl-16 duration-300 hover:bg-forest-hover md:text-base">Earn Points</Link>
                          <Link to="/admin/ecohub/records" className="block w-full text-sm py-2 pl-16 duration-300 hover:bg-forest-hover md:text-base">Records</Link>
                      </div>
                  </li>

                  {/* <!-- EcoSwap --> */}
                  <li>
                    <Link to="/admin/ecoswap" className="flex items-center py-2 hover:bg-forest-hover duration-300">
                      <div className="flex items-center">
                        <div className="h-12 flex items-center">
                          <img src="/logos/ecoswap.png" alt="" className="w-10 object-contain md:w-14 lg:w-16 md:h-7"/>
                        </div>
                        <p className="text-sm ml-2 md:text-lg">EcoSwap</p>
                      </div>
                    </Link>
                  </li>

                  {/* <!-- Green Pages --> */}
                  <li>
                      <Link to="/admin/green_pages" className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                        <div className="flex items-center">
                          <div className="h-12 flex items-center">
                            <img src="/logos/green_pages.png" alt="" className="w-10 object-contain md:w-14 lg:w-16 md:h-7"/>
                          </div>
                          <p className="text-sm ml-2 md:text-lg">Green Pages</p>
                        </div>
                      </Link>
                  </li>

                  {/* History */}
                  <li>
                    <div className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                        <div className="flex items-center">
                            <div className="h-12 flex items-center">
                              <FaHistory className="text-lg md:text-xl w-10 md:w-14 lg:w-16 h-7"/>
                            </div>
                            <p className="text-sm ml-2 md:text-lg">History</p>
                        </div>
                        <div className="icon w-8 h-8 md:w-10 md:h-10">
                          <box-icon name="chevron-down" className="w-full h-full" color="white"></box-icon>
                        </div>
                    </div>

                    <div className="submenu overflow-hidden transition-all duration-300 max-h-0">
                        <Link to="/admin/history/records" className="block w-full text-sm md:text-base py-2 pl-16 duration-300 hover:bg-forest-hover">Record History</Link>
                        <Link to="/admin/history/swap" className="block w-full text-sm md:text-base py-2 pl-16 duration-300 hover:bg-forest-hover">Swap History</Link>
                    </div>
                  </li>

                  {/* PRODUCTS */}
                  <li>
                      <Link to="/admin/products" className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                          <div className="flex items-center">
                            <div className="h-12 flex items-center">
                              <FiPackage className="text-lg md:text-xl w-10 md:w-14 lg:w-16 h-7"/>
                            </div>
                            
                            <p className="text-sm ml-2 md:text-lg">Products</p>
                          </div>
                      </Link>
                  </li>

                  {/* MATERIALS */}
                  <li>
                      <Link to="/admin/materials" className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                          <div className="flex items-center">
                            <div className="h-12 flex items-center">
                              <FaRecycle className="text-lg md:text-xl w-10 md:w-14 lg:w-16 h-7"/>
                            </div>
                            
                            <p className="text-sm ml-2 md:text-lg">Materials</p>
                          </div>
                      </Link>
                  </li>

              </ul>
              <Logout moreClass='md:hidden mt-auto px-20 mb-10'/>
            </div>
            
        </nav>
      </section>
    </>

   
  );
};

export default DashSideNav;
