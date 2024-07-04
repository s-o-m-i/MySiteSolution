// Import necessary dependencies
'use client'
import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import classes from "./MapView.module.css";

// Define the container style for the Google Map
const containerStyle = {
  width: '100%',
  height: '100%'
};

// Define the Location type
type Location = {
  lat: number;
  lng: number;
}

// Define the props for CustomMapView component
type CustomMapViewProps = {
  isLoaded?: boolean;
  mapClass?: string;
  defaultLocation?: Location;
}

// CustomMapView component to render Google Map
function CustomMapView({ mapClass, isLoaded, defaultLocation }: CustomMapViewProps) {
  // State to manage the location and zoom level
  const [location, setLocation] = useState<Location>({ lat: 0, lng: 0 })
  const [zoom, setZoom] = useState<number>(10)

  // Effect to update zoom and location on defaultLocation change
  useEffect(() => {
    setZoom(7)
    getLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultLocation])

  // State to manage the Google Map instance
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState(null)

  // Callback function when the map is loaded
  const onLoad = React.useCallback(function callback(map: any) {
    let locationObj = { lat: 0, lng: 0 };

    // If defaultLocation is provided, use it to set the map bounds
    if (defaultLocation) {
      locationObj = defaultLocation;
      const bounds = new window.google.maps.LatLngBounds(locationObj);
      map.fitBounds(bounds);
      setMap(map)
    }
    // Otherwise, use geolocation to get the user's current position
    else {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        locationObj = { lat, lng }
        const bounds = new window.google.maps.LatLngBounds(locationObj);
        map.fitBounds(bounds);
        setMap(map)
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Function to get the user's current location
  const getLocation = () => {
    if (defaultLocation) {
      setLocation(defaultLocation);
      return;
    }
    // If geolocation is supported, get the user's current position
    else if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng })
      });
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  // Callback function when the map is unmounted
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  // Render the Google Map component with Marker
  return isLoaded ? (
    <div className={`${classes.container} ${mapClass && mapClass}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          {location && (
            <>
              <Marker position={location} />
            </>
          )}
        </>
      </GoogleMap>
    </div>
  ) : <></>
}

// Memoize the component for performance optimization
export default React.memo(CustomMapView)
