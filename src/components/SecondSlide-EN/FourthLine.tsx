import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { AnimatePresence, m } from "framer-motion";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import Defs from "./Defs";

type FourthLineProps = SvgIconProps;
export default function FourthLine(props: FourthLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "fourth" && (
        <MotionSvgIcon
          width="437.865"
          height="202.949"
          viewBox="0 0 437.865 202.949"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <Defs />
          <m.g
            id="Group_579"
            data-name="Group 579"
            transform="translate(-824.706 -541.588)"
          >
            <m.path
              variants={motionLineDraw}
              id="Path_1694"
              data-name="Path 1694"
              d="M825.116,3854.5l420.151,189.245"
              transform="translate(0 -3312)"
              fill="none"
              stroke="#c79a39"
              stroke-width="2"
            />
            <m.g
              variants={motionCircleDraw}
              id="Group_534"
              data-name="Group 534"
            >
              <circle
                id="Ellipse_103"
                data-name="Ellipse 103"
                cx="12"
                cy="12"
                r="12"
                transform="translate(1238.57 720.537)"
                fill="url(#area)"
              />
              <circle
                id="Ellipse_104"
                data-name="Ellipse 104"
                cx="10"
                cy="10"
                r="10"
                transform="translate(1240.57 722.537)"
                fill="maroon"
              />
            </m.g>
          </m.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
