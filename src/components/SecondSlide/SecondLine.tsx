import { SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";
import { AnimatePresence, motion } from "framer-motion";
import { motionCircleDraw, motionLineDraw, MotionSvgIcon } from "./common";

type SecondLineProps = SvgIconProps;
export default function SecondLine(props: SecondLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <AnimatePresence>
      {content === "second" && (
        <MotionSvgIcon
          width="438.779"
          height="34.574"
          viewBox="0 0 438.779 34.574"
          {...props}
          initial="hidden"
          animate="visible"
        >
          <motion.g
            id="Group_307"
            data-name="Group 307"
            transform="translate(-801.449 -4271.88)"
          >
            <motion.line
              id="Line_267"
              data-name="Line 267"
              y1="23"
              y2={0}
              x1={0}
              x2="428"
              transform="translate(801.5 4282.5)"
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
