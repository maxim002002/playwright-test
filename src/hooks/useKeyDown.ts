//ts-ignore
import { useEffect } from "react";

const useKeyDown = (keys: string[], callback: VoidFunction) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (keys.includes(e.key)) {
        callback();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keys, callback]);
};

export default useKeyDown;
