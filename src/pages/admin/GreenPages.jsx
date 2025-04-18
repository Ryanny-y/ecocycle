import React, { useState } from "react";
import useResetNav from "../../utils/hooks/useResetNav";
import Map from "../../components/ui/admin/greenpages/Map";
import FarmProfile from "../../components/ui/admin/greenpages/FarmProfile";
import SkillMap from "../../components/ui/admin/greenpages/SkillMap";

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
    name: 'Mendoza Park',
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
    <main className="flex gap-3">
      <section className="flex-1">
        <Map setFarmSelectedId={setFarmSelectedId}/>
      </section>
      
      <section className="flex-1">
        <div id="top" className="grid grid-cols-3 text-xl font-bold mb-2">
          <button className={`hover:text-forest duration-300 ${showSection.farm_profile ? 'text-forest underline' : ''}`} onClick={() => handleSectionChange('farm_profile')}>Farm Profile</button>
          <button className={`hover:text-forest duration-300 ${showSection.skill_map ? 'text-forest underline' : ''}`} onClick={() => handleSectionChange('skill_map')}>Skill Map</button>
          <button className={`hover:text-forest duration-300 ${showSection.statistics ? 'text-forest underline' : ''}`} onClick={() => handleSectionChange('statistics')}>Statistics</button>
        </div>

        <div id="details">
          {showSection.farm_profile && <FarmProfile farmInfo={selectedFarm}/>}
          {showSection.skill_map && <SkillMap />}
        </div>
      </section>
    </main>
  )
};

export default GreenPages;
