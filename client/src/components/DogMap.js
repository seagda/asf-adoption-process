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
  },
  cardText: {
    marginTop: "5%",
    marginBottom: "5%",
  }
}))

function DogMap(props) {


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

  const classes = useStyles()

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.displaySubjects?.[0]?.coordinates}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* component used on DogDossiersAll and ManageASFUsers pages - set up to handle props / object passed for dogs and users */}
        {props.displaySubjects?.map((dogOrUser) => (
        
        <Marker 
          key={dogOrUser?.id}
          position={dogOrUser?.coordinates} >
            <NavLink gutterBottom style={{textDecoration: "none"}} to={dogOrUser?.name ? (`/dogView/${dogOrUser.id}`): (`/userView/${dogOrUser.id}`)}>
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
                      <h3 className={classes.cardText} >{dogOrUser?.name || dogOrUser?.firstName && dogOrUser?.lastName}</h3>
                      <p className={classes.cardText} >{dogOrUser?.DogStatus?.name}</p>
                      <p className={classes.cardText} >{dogOrUser?.gender || dogOrUser?.email}</p>
                      <p className={classes.cardText} >{dogOrUser?.dob || dogOrUser?.phone}</p>
                    </div>
                </InfoWindow>
              </NavLink>
          </Marker>
          )
        )}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(DogMap)