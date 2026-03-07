import { useEffect, useState } from "react";

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px), (pointer: coarse)",
    );

    const syncTouchMode = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    syncTouchMode();
    mediaQuery.addEventListener("change", syncTouchMode);

    return () => {
      mediaQuery.removeEventListener("change", syncTouchMode);
    };
  }, []);

  return isTouchDevice;
}
