import { useState, useEffect } from "react";
import {
  getCurrentScreenType,
  calculateCurrentScreenType,
  BREAKPOINT_TYPES,
  DEFAULT_BREAKPOINTS,
} from "./constants";

function useScreenType(breakpoints = DEFAULT_BREAKPOINTS) {
  const [screenType, setScreenType] = useState(
    calculateCurrentScreenType(breakpoints)
  );
  const handleResize = (type) => (event) =>
    event.matches && setScreenType(getCurrentScreenType(type));

  useEffect(() => {
    setScreenType(calculateCurrentScreenType(breakpoints));

    const largeDesktopQueryList = matchMedia(
      `(min-width: ${breakpoints.largeDesktop}px)`
    );
    const desktopQueryList = matchMedia(
      `(min-width: ${breakpoints.desktop}px) and (max-width: ${
        breakpoints.largeDesktop - 1
      }px)`
    );
    const tabletQueryList = matchMedia(
      `(min-width: ${breakpoints.tablet}px) and (max-width: ${
        breakpoints.desktop - 1
      }px)`
    );
    const mobileQueryList = matchMedia(`(max-width: ${breakpoints.tablet}px)`);

    mobileQueryList.addListener(handleResize(BREAKPOINT_TYPES.mobile));
    tabletQueryList.addListener(handleResize(BREAKPOINT_TYPES.tablet));
    desktopQueryList.addListener(handleResize(BREAKPOINT_TYPES.desktop));
    largeDesktopQueryList.addListener(
      handleResize(BREAKPOINT_TYPES.largeDesktop)
    );

    return () => {
      mobileQueryList.removeListener(handleResize(BREAKPOINT_TYPES.mobile));
      tabletQueryList.removeListener(handleResize(BREAKPOINT_TYPES.tablet));
      desktopQueryList.removeListener(handleResize(BREAKPOINT_TYPES.desktop));
      largeDesktopQueryList.removeListener(
        handleResize(BREAKPOINT_TYPES.largeDesktop)
      );
    };
  }, []);
  return screenType;
}

export default useScreenType;
