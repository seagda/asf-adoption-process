
// import React, { useState, useEffect } from "react";
// import ReactMapGL from 'react-map-gl';


// export default function MapBox() {

//   const [viewport, setViewport] = useState({
//     width: 400,
//     height: 400,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });

//   return (
//     <ReactMapGL
//       mapStyle={'mapbox://styles/mapbox/light-v9'}
//       mapboxApiAccessToken={"pk.eyJ1IjoiaGFubmFoc3RhcjEyIiwiYSI6ImNrbTVrYnlwODBmN20ydnJid2ZwOXBqcGYifQ.2PUCj36q4tJg3_8MvFGxQg"}
//       {...viewport}
//       onViewportChange={nextViewport => setViewport(nextViewport)}
//     />
//   );
// }

import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

// import ControlPanel from './control-panel';
import MapBoxPins from './MapBoxPins';
import MapBoxCardDetails from './MapBoxCardDetails';
// import CITIES from '../../.data/cities.json';

const TOKEN = 'pk.eyJ1IjoiaGFubmFoc3RhcjEyIiwiYSI6ImNrbTVrYnlwODBmN20ydnJid2ZwOXBqcGYifQ.2PUCj36q4tJg3_8MvFGxQg'; 

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

export default function MapBox(/* props */) {

  const CITY = /* props.dogLocation.city ||  */"detroit";
  const STATE = /* props.dogLocation.state ||  */ "michigan";

  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {/* <MapBoxPins data={CITY} onClick={setPopupInfo} /> */}

        {/* {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <MapBoxCardDetails info={popupInfo} />
          </Popup>
        )} */}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>

      {/* <ControlPanel /> */}
    </>
  );
}

export function renderToDom(container) {
  render(<MapBox />, container);
}