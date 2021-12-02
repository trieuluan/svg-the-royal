import { SvgIcon, SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";

type SecondLineProps = SvgIconProps;
export default function SecondLine(props: SecondLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <SvgIcon
      width="438.779"
      height="34.574"
      viewBox="0 0 438.779 34.574"
      {...props}
    >
      <g
        id="Group_307"
        data-name="Group 307"
        transform="translate(-801.449 -4271.88)"
        opacity={content === "second" ? 1 : 0}
      >
        <line
          id="Line_267"
          data-name="Line 267"
          y1="23"
          x2="428"
          transform="translate(801.5 4282.5)"
          stroke="#707070"
          stroke-miterlimit="10"
          stroke-width="1.91"
        />
        <circle
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
        />
      </g>
    </SvgIcon>
  );
}
