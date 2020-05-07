export const DEFAULT_BREAKPOINTS = {
  desktop: 992,
  tablet: 768,
  phone: 320
};

export const getCurrentScreenType = breakpoints => ({
  isMobile: window.innerWidth < breakpoints.tablet,
  isTablet:
    window.innerWidth >= breakpoints.tablet &&
    window.innerWidth < breakpoints.desktop,
  isDesktop: window.innerWidth >= breakpoints.desktop
});
