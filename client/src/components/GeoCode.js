import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyD4asyu8x4XuPg6QiohWopYCl3OokWFfEU");

// set response language. Defaults to english.
Geocode.setLanguage("en");

Geocode.setRegion("us");

Geocode.setLocationType("ROOFTOP");

// Get latitude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );