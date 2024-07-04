'use client'
import { useState } from "react";
import { LocationInput } from "../LocationInput/LocationInput";
import CustomMapView from "../MapView/CustomMapView";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";

// Define the Location type
export type Location = {
    lat: number;
    lng: number;
    address: string;
}

// Define the libraries required for Google Maps
const libraries: Libraries = ["places"];

// Export the MapLocationInputWrapper component
export const MapLocationInputWrapper = () => {
    // Load Google Maps script and handle loading errors
    const { isLoaded, loadError } = useGoogleMapsScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        libraries,
    });

    // Initialize location state with default values
    const [location, setLocation] = useState<Location>({
        lat: -3.745,
        lng: -38.523,
        address: ""
    })

    // Render the component with LocationInput, displaying selected address and coordinates
    return (
        <div>
            <LocationInput
                onSelectAddress={(address, lat, lng) => {
                    setLocation({
                        lat: lat || 0,
                        lng: lng || 0,
                        address: address || ""
                    });
                }}
                defaultValue={""}
                isLoaded={isLoaded}
                loadError={loadError}
            />
            {/* Display the selected location information */}
            <div>
                <p>Latitude: {location.lat}</p>
                <p>Longitude: {location.lng}</p>
                <p>Address: {location.address}</p>
            </div>
            {/* Render the CustomMapView component with default location and loading status */}
            <CustomMapView
                defaultLocation={{
                    lat: location.lat,
                    lng: location.lng
                }}
                isLoaded={isLoaded}
            />
        </div>
    );
}
