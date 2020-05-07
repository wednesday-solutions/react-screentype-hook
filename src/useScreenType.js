import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { getCurrentScreenType, DEFAULT_BREAKPOINTS } from "./constants";

function useScreenType(breakpoints = DEFAULT_BREAKPOINTS) {
  const [screenType, setScreenType] = useState(
    getCurrentScreenType(breakpoints)
  );
  const handleResize = () => {
    const currentScreenType = getCurrentScreenType(breakpoints);
    const updated = Object.keys(currentScreenType).find(
      key => currentScreenType[key] !== screenType[key]
    );
    if (updated) {
      setScreenType(currentScreenType);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, [screenType]);
  return screenType;
}

useScreenType.propTypes = {
  breakpoints: PropTypes.shape({
    isMobile: PropTypes.bool,
    isTablet: PropTypes.bool,
    isDesktop: PropTypes.bool
  })
};
export default useScreenType;
