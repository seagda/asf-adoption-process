
import React, { useState, useEffect } from "react";
import ReactMapGL from 'react-map-gl';


export default function MapBox() {

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapStyle={'mapbox://styles/mapbox/light-v9'}
      mapboxApiAccessToken={"pk.eyJ1IjoiaGFubmFoc3RhcjEyIiwiYSI6ImNrbTVrYnlwODBmN20ydnJid2ZwOXBqcGYifQ.2PUCj36q4tJg3_8MvFGxQg"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}