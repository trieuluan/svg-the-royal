import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import { AnimatePresence, m } from "framer-motion";
import Defs from "./Defs";

type FirstLineProps = SvgIconProps;

export default function FirstLine(props: FirstLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "first" && (
        <MotionSvgIcon
          width="434.349"
          height="28.962"
          viewBox="0 0 434.349 28.962"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <Defs />
          <m.g
            id="Group_576"
            data-name="Group 576"
            transform="translate(-822.222 -238.537)"
          >
            <m.path
              id="Path_1692"
              data-name="Path 1692"
              d="M822.26,1394.5l419.242-16.063"
              transform="translate(0 -1128)"
              fill="none"
              stroke="#c89c3c"
              stroke-width="2"
              variants={motionLineDraw}
            />
            <m.g
              id="Group_544"
              data-name="Group 544"
              variants={motionCircleDraw}
            >
              <circle
                id="Ellipse_100"
                data-name="Ellipse 100"
                cx="12"
                cy="12"
                r="12"
                transform="translate(1232.57 238.537)"
                fill="url(#area)"
              />
              <circle
                id="Ellipse_99"
                data-name="Ellipse 99"
                cx="10"
                cy="10"
                r="10"
                transform="translate(1234.57 240.537)"
                fill="maroon"
              />
            </m.g>
          </m.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
