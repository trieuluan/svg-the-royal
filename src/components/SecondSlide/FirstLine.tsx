import { SvgIcon, SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";

type FirstLineProps = SvgIconProps;
export default function FirstLine(props: FirstLineProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <SvgIcon viewBox="0 0 442.746 21.315" {...props}>
      <g
        id="Group_306"
        data-name="Group 306"
        transform="translate(-797.482 -4271.88)"
        opacity={content === "first" ? 1 : 0}
      >
        <line
          id="Line_267"
          data-name="Line 267"
          y1="8"
          x2="432"
          transform="translate(797.5 4282.5)"
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
