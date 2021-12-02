import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";
import { AnimatePresence, motion } from "framer-motion";

type FirstLineProps = SvgIconProps;

export default function FirstLine(props: FirstLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "first" && (
        <MotionSvgIcon
          viewBox="0 0 442.746 21.315"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <motion.g
            id="Group_306"
            data-name="Group 306"
            transform="translate(-797.482 -4271.88)"
          >
            <motion.line
              id="Line_267"
              data-name="Line 267"
              y1={8}
              y2={0}
              x1={0}
              x2={432}
              transform="translate(797.5 4282.5)"
              stroke="#707070"
              stroke-miterlimit="10"
              stroke-width="1.91"
              variants={motionLineDraw}
            />
            <motion.circle
              id="Ellipse_22"
              data-name="Ellipse 22"
              cx="10"
              cy="10"
              r="10"
              transform="translate(1219.57 4272.537)"
              fill="maroon"
              stroke="#707070"
              stroke-miterlimit="10"
              stroke-width="1.315"
              variants={motionCircleDraw}
            />
          </motion.g>
        </MotionSvgIcon>
      )}
    </AnimatePresence>
  );
}
