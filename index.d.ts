import { DEFAULT_EXTENSIONS } from "@babel/core";

type Breakpoints = {
  largeDesktop: number;
  desktop: number;
  tablet: number;
  mobile: number;
};

type BREAKPOINT_TYPES = {
  mobile: "MOBILE";
  tablet: "TABLET";
  desktop: "DESKTOP";
  largeDesktop: "LARGE_DESKTOP";
};

export default function useScreenType(breakpoints?: Breakpoints): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
};
