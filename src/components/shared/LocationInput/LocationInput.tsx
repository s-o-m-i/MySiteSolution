/* eslint-disable no-unused-vars */
import { ChangeEvent } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import classes from "./LocationInput.module.css";

// Define the ISearchBoxProps interface for component props
interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  rightIcon?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  isLoaded?: boolean;
  loadError?: Error | undefined;
}

// Export the LocationInput component
export function LocationInput({
  label,
  labelClassName,
  onSelectAddress,
  defaultValue,
  isLoaded,
  loadError,
  placeholder,
  className,
  rightIcon,
  onChange,
}: ISearchBoxProps) {
  // Check if the library is loaded, else return null
  if (!isLoaded) return null;
  // Check if there's a load error, else display an error message
  if (loadError) return <div>Error loading</div>;

  // Render the component with ReadySearchBox
  return (
    <div>
      {label && <label className={labelClassName}>{label}</label>}
      <ReadySearchBox
        onChange={(value: string) => onChange && onChange(value)}
        onSelectAddress={onSelectAddress}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={className}
        rightIcon={rightIcon}
      />
    </div>
  );
}

// Define the ReadySearchBox component
function ReadySearchBox({
  onSelectAddress,
  defaultValue,
  className,
  placeholder,
  rightIcon,
  onChange,
}: ISearchBoxProps) {
  // Destructure the values from usePlacesAutocomplete
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
  };

  // Handle selection of an address
  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.error(`😱 Error:`, error);
    }
  };

  // JSX for the ReadySearchBox component
  return (
    <Combobox onSelect={handleSelect} style={{ position: 'relative' }}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder={placeholder || "Search your location"}
        className={`w-full ${classes.inputContainer} ${className}`}
        autoComplete="off"
      />
      {/* Display the right icon if provided */}
      {rightIcon && (
        <div style={{
          position: "absolute",
          width: 30,
          right: 13,
          bottom: 15,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}>
          {rightIcon}
        </div>
      )}
      {/* Display suggestions in a ComboboxPopover */}
      <ComboboxPopover>
        <ComboboxList className="map-input-list">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
