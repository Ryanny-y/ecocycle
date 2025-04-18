import React, { useEffect, useState } from "react";
import useResetNav from "../../utils/hooks/useResetNav";
import Map from "../../components/ui/admin/greenpages/Map";
import FarmProfile from "../../components/ui/admin/greenpages/FarmProfile";
import SkillMap from "../../components/ui/admin/greenpages/SkillMap";
import useFetchData from '../../utils/hooks/useFetchData'


const farmProfiles = [
  {
    id: 'farm_1',
    name: 'MWSS Service Road',
    size: '390 sqm.',
    age: 2,
    type: 'Aquaponics, Vertical Garden, Greenhouse',
    address: 'MWSS Service Road, Quezon City',
    description: '',
  },
  {
    id: 'farm_2',
    name: 'Silvina Eco Park',
    size: '200 sqm.',
    age: 3,
    type: 'Hydroponics, Vertical Garden, Greenhouse',
    address: 'Silvina Park, Bangus St., Novaliches, Quezon City',
    description: '',
  },
  {
    id: 'farm_3',
    name: 'Mendoza Urban Farm',
    size: '200 sqm.',
    age: 5,
    type: 'Backyard Garden, Vertical Garden, Greenhouse',
    address: '',
    description: '',
  },
];


const GreenPages = () => {

  useResetNav();
  
  const [ farmSelectedId, setFarmSelectedId ] = useState('farm_1');
  const selectedFarm = farmProfiles.find(farm => farm.id === farmSelectedId);
  const [ staffList, setStaffList ] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchData(`${url}/staffs`);

  useEffect(() => {
    if(data && !loading && !error) {
      setStaffList(data);
    }

  }, [data, loading, error])


  const [ showSection, setShowSection ] = useState({
    farm_profile: true,
    skill_map: false,
    statistics: false,
  })

  const handleSectionChange = (section) => {
    setShowSection({
      farm_profile: section === "farm_profile",
      skill_map: section === "skill_map",
      statistics: section === "statistics",
    });
  };

  return (
    <main className="flex flex-col md:flex-row gap-3">
      <section className="flex-1">
        <Map setFarmSelectedId={setFarmSelectedId}/>
      </section>
      
      <section className="flex-1">
        <div id="top" className="flex items-center flex-wrap gap-5 text-2xl md:text-xl font-bold mb-2 text-start justify-around">
          <button className={`hover:text-forest duration-300 text-nowrap ${showSection.farm_profile ? 'text-forest' : ''}`} onClick={() => handleSectionChange('farm_profile')}>Farm Profile</button>
          <button className={`hover:text-forest duration-300 text-nowrap ${showSection.skill_map ? 'text-forest' : ''}`} onClick={() => handleSectionChange('skill_map')}>Skill Map</button>
          <button className={`hover:text-forest duration-300 text-nowrap ${showSection.statistics ? 'text-forest' : ''}`} onClick={() => handleSectionChange('statistics')}>Statistics</button>
        </div>

        <div id="details">
          {showSection.farm_profile && <FarmProfile farmInfo={selectedFarm} staffList={staffList}/>}
          {showSection.skill_map && <SkillMap staffList={staffList} farmName={selectedFarm.name}/>}
        </div>
      </section>
    </main>
  )
};

export default GreenPages;
