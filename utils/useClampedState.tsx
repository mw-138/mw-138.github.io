import { useCallback } from "react";
import { clamp } from "./helperFunctions";
import useLocalStorageState from "./useLocalStorageState";

const useClampedState = (
  key: string,
  initialValue: number,
  min: number,
  max: number,
) => {
  const [value, setValue] = useLocalStorageState(
    key,
    clamp(initialValue, min, max),
  );

  const setClampedValue = useCallback(
    (newValue: number | ((prevValue: number) => number)) => {
      setValue((prevValue) => {
        const nextValue =
          typeof newValue === "function" ? newValue(prevValue) : newValue;
        return clamp(nextValue, min, max);
      });
    },
    [min, max],
  );

  return [value, setClampedValue] as const;
};

export default useClampedState;
