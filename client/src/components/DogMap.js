import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import {NavLink} from "react-router-dom";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const useStyles=makeStyles(theme => ({
  markerPhotos: {
    width: '70px',
    height: '50px',
    borderRadius: 8,
    boxShadow: '0 3px 10px 0 #BDC9D7',
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
        <NavLink gutterBottom style={{textDecoration: "none"}} to={`/dogView/${dogOrUser.id}`}>
        <Marker 
          key={dogOrUser?.id}
          position={dogOrUser?.coordinates}>
          <InfoWindow 
          key={dogOrUser?.id}
          position={dogOrUser?.coordinates}>
            <div>
              <CardMedia 
                component="img"
                alt="profile photo"
                height="100%"
                image={dogOrUser?.DogPhotos?.[0].url || dogOrUser?.photoUrl}
                className={classes.markerPhotos}/>
              {/* <img src={dogOrUser?.DogPhotos?.[0].url || dogOrUser?.photoUrl} alt="profile photo" /> */}
              <h3>{dogOrUser?.name || dogOrUser?.firstName && dogOrUser?.lastName}</h3>
              <p>{dogOrUser?.gender || dogOrUser?.email}</p>
              <p>{dogOrUser?.dob || dogOrUser?.phone}</p>
            </div>
          </InfoWindow>
          </Marker>
          </NavLink>)
        )}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(DogMap)