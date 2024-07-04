import { useEffect, useState } from 'react';

// Custom hook for debouncing a value
const useDebounce = (value: string, delay: number) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set a timer to update the debounced value after the specified delay
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timer if the component unmounts or if the value changes
        return () => {
            clearTimeout(timerId);
        };
    }, [value, delay]);  // Re-run the effect when the value or delay changes

    return debouncedValue;  // Return the debounced value to the component
};

export default useDebounce;
