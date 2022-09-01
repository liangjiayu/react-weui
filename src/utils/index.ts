import { useEffect, useState, useRef } from 'react';

export const useMergedState = <T>({
  value,
  defaultValue,
}: {
  value?: T;
  defaultValue?: T;
}): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const firstMountRef = useRef(true);

  //  ======  Init   ======
  const [val, setVal] = useState<T>(() => {
    let finalValue = undefined;
    if (value !== undefined) {
      finalValue = value;
    } else if (defaultValue !== undefined) {
      finalValue = defaultValue;
    }
    return finalValue as T;
  });

  // ======  Sync   ======
  useEffect(() => {
    if (!firstMountRef.current) {
      setVal(value as T);
    }
  }, [value]);

  useEffect(() => {
    firstMountRef.current = false;
    return () => {
      firstMountRef.current = true;
    };
  }, []);

  return [val, setVal];
};
