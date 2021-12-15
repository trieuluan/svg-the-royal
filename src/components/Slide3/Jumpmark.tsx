import { SVGProps } from "react";
import { styled } from "@mui/material";

const TOTAL_TIME = 1000;

const StyledG = styled("g")`
  @keyframes Jump {
    from {
      transform: scale(1);
    }
    10% {
      transform: scale(1.5);
    }
    30% {
      transform: scale(1.5);
    }
    40% {
      transform: scale(1);
    }
    to {
      transform: scale(1);
    }
  }

  transform-origin: center;
  transform-box: fill-box;
  animation: Jump ${TOTAL_TIME}ms normal backwards ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: ${(props: any) => props["data-index"] * (TOTAL_TIME / 10)}ms;
`;

export default function Jumpmark(props: SVGProps<SVGGElement>): JSX.Element {
  console.log("jumpmark");
  return <StyledG {...props} />;
}
