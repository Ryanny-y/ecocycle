import novaImage from '../../../../assets/images/nova.jpg';
import Directory from './Directory';

const FarmProfile = ({ farmInfo }) => {
  return (
    <>
      <div className="bg-white shadow-lg px-5 py-5 rounded-md flex flex-col gap-2">
        <h1 className="text-forest font-bold text-xl">Farm Profile</h1>
        
        <div id="profile_info" className="font-medium">
          <img src={novaImage} alt="Farm Image" className='w-full h-60 mb-2'/>

          <div>
            <p>Name: {farmInfo?.name}</p>
            <p>Size: {farmInfo?.size}</p>
            <p>Age: {farmInfo?.age}</p>
            <p>Type: {farmInfo?.type}</p>
            <p>Address: {farmInfo?.address}</p>
            <p>Description: {farmInfo?.description}</p>
          </div>
        </div>
      </div>

      <Directory />
    </>
    
  )
};

export default FarmProfile;
