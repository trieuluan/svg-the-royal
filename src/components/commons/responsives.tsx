import { useMediaQuery } from "react-responsive";
import { ComponentType } from "react";

export const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
export const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return isMobile ? children : null;
};

export function tlwhGenerator(baseW: number, baseH: number) {
  const getXSize = (w: number) => `${(w * 100.0) / baseW}%`,
    getYSize = (h: number) => `${(h * 100.0) / baseH}%`;
  return (y: number, x: number, w: number, h: number) => ({
    top: getYSize(y),
    left: getXSize(x),
    width: getXSize(w),
    height: getYSize(h),
  });
}

const getXSizeMob = (w: number) => `${w / 4.14}%`,
  getYSizeMob = (h: number) => `${h / 8.96}%`;
export const tlwhMob = (y: number, x: number, w: number, h: number) => ({
  top: getYSizeMob(y),
  left: getXSizeMob(x),
  width: getXSizeMob(w),
  height: getYSizeMob(h),
});

export function Responsive({
  d: Desktop,
  m: Mobile,
  ...props
}: {
  d: ComponentType<any>;
  m: ComponentType<any>;
  [key: string]: any;
}): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  const isIpadProPortrait = useMediaQuery({
    query:
      "(min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2)  and (orientation: portrait)",
  });
  return (
    <>
      {isMobile || isIpadProPortrait ? (
        <Mobile {...props} />
      ) : (
        <Desktop {...props} />
      )}
    </>
  );
}
