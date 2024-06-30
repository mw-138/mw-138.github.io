import { useCallback, useState } from "react";
import useLocalStorageState from "./useLocalStorageState";
import { clamp } from "@/lib/utils";

export const useClampedState = (
  initialValue: number,
  min: number,
  max: number,
) => {
  const [value, setValue] = useState(clamp(initialValue, min, max));

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

export const useClampedLocalStorageState = (
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
