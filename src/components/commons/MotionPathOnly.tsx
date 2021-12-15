import { SVGProps } from "react";
import { styled } from "@mui/material";

const StyledPath = styled("path")`
  @keyframes StrokeLine {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -200;
    }
  }
  stroke-miterlimit: 20;
  stroke-dashoffset: 0;
  animation: StrokeLine 2.5s infinite linear;
`;

export default function MotionPathOnly({
  ...props
}: SVGProps<SVGPathElement>): JSX.Element {
  return (
    <>
      <StyledPath {...props} />
    </>
  );
}
