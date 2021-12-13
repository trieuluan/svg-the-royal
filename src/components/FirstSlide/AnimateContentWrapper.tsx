import React, { PropsWithChildren } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import MotionPath from "./MotionPath";
import SplashPoint from "./SplashPoint";

type AnimateContentWrapperProps = PropsWithChildren<SvgIconProps>;
export default function AnimateContentWrapper({
  children,
  ...props
}: AnimateContentWrapperProps): JSX.Element {
  const mappedChildren = React.Children.map(children, (child: any) => {
    if (/^motionpath/.test(child?.props?.id)) {
      return <MotionPath {...child.props} />;
    }
    if (/^splashpoint/.test(child?.props?.id)) {
      return <SplashPoint {...child.props} />;
    }
    return child;
  });

  return <SvgIcon {...props}>{mappedChildren}</SvgIcon>;
}
