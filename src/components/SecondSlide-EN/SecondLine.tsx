import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { AnimatePresence, m } from "framer-motion";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import Defs from "./Defs";

type SecondLineProps = SvgIconProps;
export default function SecondLine(props: SecondLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "second" && (
        <MotionSvgIcon
          width="430.258"
          height="47.998"
          viewBox="0 0 430.258 47.998"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <Defs />
          <m.g
            id="Group_577"
            data-name="Group 577"
            transform="translate(-826.313 -308.537)"
          >
            <m.path
              id="Path_1693"
              data-name="Path 1693"
              d="M826.4,2575.538c1.053-.683,413.808-34.384,413.808-34.384"
              transform="translate(0 -2220)"
              fill="none"
              stroke="#c69a39"
              stroke-width="2"
              variants={motionLineDraw}
            />
            <m.g
              id="Group_533"
              data-name="Group 533"
              transform="translate(0 74)"
              variants={motionCircleDraw}
            >
              <circle
                id="Ellipse_101"
                data-name="Ellipse 101"
                cx="12"
                cy="12"
                r="12"
                transform="translate(1232.57 234.537)"
                fill="url(#area)"
              />
              <circle
                id="Ellipse_102"
                data-name="Ellipse 102"
                cx="10"
                cy="10"
                r="10"
                transform="translate(1234.57 236.537)"
                fill="maroon"
              />
            </m.g>
          </m.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
