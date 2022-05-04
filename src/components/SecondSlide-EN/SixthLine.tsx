import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { AnimatePresence, m } from "framer-motion";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import Defs from "./Defs";

type SixthLineProps = SvgIconProps;
export default function SixthLine(props: SixthLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "sixth" && (
        <MotionSvgIcon
          width="427.816"
          height="117.72"
          viewBox="0 0 427.816 117.72"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <Defs />
          <m.g
            id="Group_581"
            data-name="Group 581"
            transform="translate(-828.755 -729.817)"
          >
            <m.path
              id="Path_1695"
              data-name="Path 1695"
              d="M829,5168.787l411.556,103.95"
              transform="translate(0 -4438)"
              fill="none"
              stroke="#c59735"
              stroke-width="2"
              variants={motionLineDraw}
            />
            <m.g
              id="Group_574"
              data-name="Group 574"
              variants={motionCircleDraw}
            >
              <circle
                id="Ellipse_107"
                data-name="Ellipse 107"
                cx="12"
                cy="12"
                r="12"
                transform="translate(1232.57 823.537)"
                fill="url(#area)"
              />
              <circle
                id="Ellipse_108"
                data-name="Ellipse 108"
                cx="10"
                cy="10"
                r="10"
                transform="translate(1234.57 825.537)"
                fill="maroon"
              />
            </m.g>
          </m.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
