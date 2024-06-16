import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useLocalStorageState<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  // Get the initial state from localStorage or use the initial value
  const getInitialState = (): T => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      try {
        return JSON.parse(storedValue) as T;
      } catch (error) {
        console.warn(
          `Error parsing localStorage value for key "${key}":`,
          error,
        );
      }
    }
    return initialValue;
  };

  const [state, setState] = useState<T>(getInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`Error setting localStorage value for key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
