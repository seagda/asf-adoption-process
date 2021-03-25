import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const useStyles=makeStyles(theme => ({
  markerPhotos: {
    width: '70px',
    height: '50px'
  }
}))

function DogMap(props) {

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

  const classes = useStyles()

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props.displaySubjects?.map((dogOrUser) => (
        <Marker 
          key={dogOrUser?.id}
          position={dogOrUser?.coordinates}>
          <InfoWindow 
          key={dogOrUser?.id}
          position={dogOrUser?.coordinates}>
            <div>
              <img src={dogOrUser?.DogPhotos?.[0].url || dogOrUser?.photoUrl} alt="profile photo" className={classes.markerPhotos}/>
              <h5>{dogOrUser?.name || dogOrUser?.firstName && dogOrUser?.lastName}</h5>
              <h5>{dogOrUser?.gender || dogOrUser?.email}</h5>
              <h5>{dogOrUser?.dob || dogOrUser?.phone}</h5>
            </div>
          </InfoWindow>

          </Marker>)
        )}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(DogMap)