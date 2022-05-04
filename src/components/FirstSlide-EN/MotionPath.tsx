import { SVGProps } from "react";
import { styled } from "@mui/material";

const StyledPath = styled("path")`
  stroke: rgba(255, 255, 255, 0.75);
  stroke-miterlimit: 20;
  stroke-width: 1;
  stroke-dasharray: 10;
  stroke-dashoffset: 0;
  animation: StrokeLine 2.5s infinite linear;
`;

export default function MotionPath({
  id,
  stroke,
  strokeWidth,
  ...props
}: SVGProps<SVGPathElement>): JSX.Element {
  return (
    <>
      <path id={id} stroke={stroke} strokeWidth={strokeWidth} {...props} />
      <StyledPath {...props} />
    </>
  );
}
