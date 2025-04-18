import React, { useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};
const libraries = ['marker'];

const locations = [
  {
    id: 'farm_1',
    lat: 14.6846987,
    lng: 121.0312172,
    title: 'Location 1',
  },
  {
    id: 'farm_2',
    lat: 14.6857839,
    lng: 121.0263423,
    title: 'Location 2',
  },
];

const MapComponent = ({ setFarmSelectedId }) => {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={locations[0]}
      zoom={13}
      onLoad={(map) => (mapRef.current = map)}
    >
      {/* Add multiple markers */}
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.title}
          onClick={() => {
            setFarmSelectedId(location.id);
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <div>Loading map...</div>
  );
};

export default MapComponent;
