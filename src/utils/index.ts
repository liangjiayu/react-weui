import { useEffect, useState, useRef } from 'react';

export const useMergedState = <T>({
  value,
  defaultValue,
}: {
  value?: T;
  defaultValue?: T;
}) => {
  const firstMountRef = useRef(true);

  //  ======  Init   ======
  const [val, setVal] = useState<any>(() => {
    let finalValue = undefined;
    if (value !== undefined) {
      finalValue = value;
    } else if (defaultValue !== undefined) {
      finalValue = defaultValue;
    }
    return finalValue;
  });

  // ======  Sync   ======
  useEffect(() => {
    if (!firstMountRef.current) {
      setVal(value);
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
