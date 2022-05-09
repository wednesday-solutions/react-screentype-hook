export const DEFAULT_BREAKPOINTS = {
  largeDesktop: 1440,
  desktop: 992,
  tablet: 768,
  mobile: 320,
};
export const BREAKPOINT_TYPES = {
  mobile: "MOBILE",
  tablet: "TABLET",
  desktop: "DESKTOP",
  largeDesktop: "LARGE_DESKTOP",
};
export const getCurrentScreenType = (currentScreenType) => ({
  isMobile: currentScreenType === BREAKPOINT_TYPES.mobile,
  isTablet: currentScreenType === BREAKPOINT_TYPES.tablet,
  isDesktop: currentScreenType === BREAKPOINT_TYPES.desktop,
  isLargeDesktop: currentScreenType === BREAKPOINT_TYPES.largeDesktop,
});

export const calculateCurrentScreenType = (breakpoints) => ({
  isMobile: window.innerWidth < breakpoints.tablet,
  isTablet:
    window.innerWidth >= breakpoints.tablet &&
    window.innerWidth < breakpoints.desktop,
  isDesktop:
    window.innerWidth >= breakpoints.desktop &&
    window.innerWidth < breakpoints.largeDesktop,
  isLargeDesktop: window.innerWidth >= breakpoints.largeDesktop,
});
