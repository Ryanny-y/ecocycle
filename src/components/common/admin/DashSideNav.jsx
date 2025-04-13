import { useState } from "react";
import DashNavLink from "../../ui/admin/DashNavLink";
import { Link } from "react-router";

const DashSideNav = () => {
  const [ mobileToggle, setMobileToggle ] = useState(false);

  const toggleMenu = (e) => {
    const icon = e.currentTarget.querySelector('.icon');
    const submenu = e.currentTarget?.nextElementSibling;
    icon?.classList.toggle('rotate-180');
    submenu?.classList.toggle('max-h-0');
    submenu?.classList.toggle('max-h-[500px]');
  }

  return (
    <section className="flex flex-col lg:flex-row bg-forest">
      {/* <!-- Mobile Header --> */}
      <div className="flex justify-between items-center lg:hidden py-2">
          <div className="flex items-center ml-2 mt-2 mb-2">
              <img src="/logos/logo.png" alt="NSTP Logo" className="w-14 object-contain md:w-16"/>
              <h1 className="font-bold ml-2 text-3xl text-white md:text-3xl">Eco-Cycle</h1>
          </div>
          <button id="menu-toggle" className={`${mobileToggle ? 'hidden' : 'block'} lg:hidden p-2 text-3xl md:text-4xl text-white`} onClick={() => setMobileToggle(true)}>☰</button>
      </div>

      {/* <!-- Overlay (mobile only) --> */}
      <div id="overlay" className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${mobileToggle ? '' : 'hidden'}`} onClick={() => setMobileToggle(false)}></div>

      {/* <!-- Sidebar --> */}
      <nav id="Mobile-menu" className={`
          fixed
          top-0 left-0
          bottom-0
          lg:pt-0
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
      `}>
          {/* <!-- Desktop Logo --> */}
          <Link to="/" className="hidden lg:flex items-center p-4 border-b border-white/20">
              <img src="/logos/logo.png" alt="NSTP Logo" className="w-14 object-contain lg:w-20 lg:h-14"/>
              <h1 className="font-bold ml-1 text-2xl text-white lg:text-3xl lg:font-bold">Eco-Cycle</h1>
          </Link>

          {/* <!-- Close Button (mobile only) --> */}
          <div className="flex items-center justify-between lg:hidden py-3 px-4">
            <div className="flex items-center">
                <img src="/logos/logo.png" alt="NSTP Logo" className="h-10 md:h-16"/>
                <h1 className="font-bold ml-2 n text-2xl text-white md:text-3xl">Eco-Cycle</h1>
            </div>
            <span id="close-menu" className="text-white text-5xl cursor-pointer" onClick={() => setMobileToggle(false)}>×</span>
          </div>

          {/* <!-- Menu Content --> */}
          <ul className="flex flex-col text-white w-full px-3  overflow-y-auto">

              {/* <!-- Overview --> */}
              <li>
                  <Link to="/admin/overview" className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                      <div className="flex items-center">
                        <div className="w-10 object-contain md:w-14 lg:w-16 md:h-12">
                          <box-icon type="solid" name='dashboard' className="h-full w-full" color="white"></box-icon>
                        </div>
                        <p className="text-sm ml-2 md:text-lg">Overview</p>
                      </div>
                  </Link>
              </li>

              {/* <!-- Basura-Eco Hub --> */}
              <li>
                  <div className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                      <div className="flex items-center">
                          <img src="/logos/basura_eco_hub.png" alt="" className="w-10 object-contain md:w-14 lg:w-16 md:h-12"/>
                          <p className="text-sm ml-2 md:text-lg">Basura Eco Hub</p>
                      </div>
                      <div className="icon w-8 h-8 md:w-10 md:h-10">
                        <box-icon name="chevron-down" className="w-full h-full" color="white"></box-icon>
                      </div>
                  </div>
                  
                  <div className="submenu overflow-hidden transition-all duration-300 max-h-0">
                      <Link to="/admin/ecohub/create_record" className="block w-full text-lg py-2 pl-16 duration-300 hover:bg-forest-hover md:text-lg">Create Record</Link>
                      <Link to="/admin/ecohub/update_record" className="block w-full text-lg py-2 pl-16 duration-300 hover:bg-forest-hover md:text-lg">Earn Points</Link>
                      <Link to="/admin/ecohub/records" className="block w-full text-lg py-2 pl-16 duration-300 hover:bg-forest-hover md:text-lg">Records</Link>
                  </div>
              </li>

              {/* <!-- EcoSwap --> */}
              <li>
                <Link to="/admin/ecoswap" className="flex items-center py-2 hover:bg-forest-hover duration-300">
                    <img src="/logos/ecoswap.png" alt="" className="w-10 object-contain md:w-14 pl-3 lg:w-16 md:h-12"/>
                    <p className="text-sm ml-2 md:text-lg">EcoSwap</p>
                </Link>
              </li>

              {/* <!-- Green Pages --> */}
              <li>
                  <Link to="/admin/green_pages" className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                      <div className="flex items-center">
                          <img src="/logos/green_pages.png" alt="" className="w-10 object-contain md:w-14 lg:w-16 md:h-12"/>
                          <p className="text-sm ml-2 md:text-lg">Green Pages</p>
                      </div>
                  </Link>
              </li>

              {/* History */}
              <li>
                <div className="menu-header flex items-center justify-between cursor-pointer lg:cursor-auto py-2 hover:bg-forest-hover duration-300" onClick={toggleMenu}>
                    <div className="flex items-center">
                        <div className="w-10 object-contain md:w-14 lg:w-16 md:h-12">
                          <box-icon name='history' className="h-full w-full" color="white"></box-icon>
                        </div>
                        <p className="text-sm ml-2 md:text-lg">History</p>
                    </div>
                    <div className="icon w-8 h-8 md:w-10 md:h-10">
                      <box-icon name="chevron-down" className="w-full h-full" color="white"></box-icon>
                    </div>
                </div>

                <div className="submenu overflow-hidden transition-all duration-300 max-h-0">
                    <Link to="" className="block w-full text-lg py-2 pl-16 duration-300 hover:bg-forest-hover md:text-lg">Record History</Link>
                    <Link to="" className="block w-full text-lg py-2 pl-16 duration-300 hover:bg-forest-hover md:text-lg">Swap History</Link>
                </div>
              </li>
          </ul>
      </nav>
    </section>
  );
};

export default DashSideNav;
