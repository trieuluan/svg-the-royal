import { m } from "framer-motion";
import { SvgIcon, Typography, TypographyProps } from "@mui/material";
import { ComponentType } from "react";
import "../commons/fonts.css";

export const MotionSvgIcon = m(SvgIcon) as unknown as ComponentType<any>;

const lineDuration = 0.32;
export const motionLineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: 0,
        type: "spring",
        duration: lineDuration,
        bounce: 0,
      },
      opacity: { delay: 0, duration: 0.01 },
    },
  },
};
export const motionCircleDraw = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: lineDuration - 0.03,
      type: "spring",
      duration: 0.2,
      bounce: 0,
    },
  },
};

export const SlideLabel = ({
  sx,
  isMobile,
  ...props
}: TypographyProps & { isMobile: boolean }) => (
  <Typography
    sx={{
      fontFamily: "Megante !important",
      fontSize: isMobile ? "6.8vw" : 38,
      color: "#a01f26",
      lineHeight: 73.0 / 60,
      ...sx,
    }}
    {...props}
  >
    MẶT BẰNG
    <br />
    THIẾT KẾ ĐIỂN HÌNH
  </Typography>
);
