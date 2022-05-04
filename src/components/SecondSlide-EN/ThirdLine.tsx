import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { AnimatePresence, m } from "framer-motion";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import Defs from "./Defs";

type ThirdLineProps = SvgIconProps;
export default function ThirdLine(props: ThirdLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "third" && (
        <MotionSvgIcon
          width="428.475"
          height="131.329"
          viewBox="0 0 428.475 131.329"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <Defs />
          <m.g
            id="Group_578"
            data-name="Group 578"
            transform="translate(-828.096 -450.208)"
          >
            <m.path
              variants={motionLineDraw}
              id="Path_1691"
              data-name="Path 1691"
              d="M-.266-.812,412,118"
              transform="translate(828.5 451.5)"
              fill="none"
              stroke="#c79b3a"
              stroke-width="1"
            />
            <m.g
              variants={motionCircleDraw}
              id="Group_539"
              data-name="Group 539"
            >
              <circle
                id="Ellipse_98"
                data-name="Ellipse 98"
                cx="12"
                cy="12"
                r="12"
                transform="translate(1232.57 557.537)"
                fill="url(#area)"
              />
              <circle
                id="Ellipse_22"
                data-name="Ellipse 22"
                cx="10"
                cy="10"
                r="10"
                transform="translate(1234.57 559.537)"
                fill="maroon"
              />
            </m.g>
          </m.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
