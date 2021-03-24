import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

function MapBox(props) {

    // pass in geocoded lat and log here 
    const center = {
      lat: 38.624691,
      lng: -90.184776
    };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  // marker.addListener("click", () => {
  //   infowindow.open(map, marker);
  // });

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props.displaySubjects.map((dogOrUser) => (
          <Marker 
          key={dogOrUser.id}
          position={dogOrUser.coordinates}>
          {/* <InfoWindow>
            <div>
              <h5>{dogOrUser?.name}</h5>
            </div>
          </InfoWindow> */}

          </Marker>
        ))}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapBox)