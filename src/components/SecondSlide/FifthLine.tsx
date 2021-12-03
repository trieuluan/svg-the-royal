import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { AnimatePresence, motion } from "framer-motion";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import Defs from "./Defs";

type FifthLineProps = SvgIconProps;
export default function FifthLine(props: FifthLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "fifth" && (
        <MotionSvgIcon
          width="436.11"
          height="157.67"
          viewBox="0 0 436.11 157.67"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <Defs />
          <motion.g
            id="Group_580"
            data-name="Group 580"
            transform="translate(-826.461 -634.867)"
          >
            <motion.path
              id="Path_1696"
              data-name="Path 1696"
              d="M3009.783,3947.813l420.341,143.276"
              transform="translate(-2183 -3312)"
              fill="none"
              stroke="#c89c3c"
              stroke-width="2"
              variants={motionLineDraw}
            />
            <motion.g
              variants={motionCircleDraw}
              id="Group_535"
              data-name="Group 535"
              transform="translate(0 48)"
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
            </motion.g>
          </motion.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
