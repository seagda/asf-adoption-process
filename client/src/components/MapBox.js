import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};



function MapBox(props) {

    // pass in geocoded lat and log here 
    const center = {
      lat: 42.3145186,
      lng: -71.1103681
    };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD4asyu8x4XuPg6QiohWopYCl3OokWFfEU"
  })

// const practiceMarker = [{
//   key: 1,
//   lat: 42.3145186,
//   lng: -71.1103681
// },{
//   key: 2,
//   lat: 42,
//   lng: -71
// }]

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props.dogs.map((dog) => (
          <Marker position={dog.coordinates}/>
        ))}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapBox)