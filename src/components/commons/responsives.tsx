import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
export const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return isMobile ? children : null;
};

const getXSizeMob = (w: number) => `${w / 4.14}%`,
  getYSizeMob = (h: number) => `${h / 8.96}%`;
export const tlwhMob = (y: number, x: number, w: number, h: number) => ({
  top: getYSizeMob(y),
  left: getXSizeMob(x),
  width: getXSizeMob(w),
  height: getYSizeMob(h),
});
