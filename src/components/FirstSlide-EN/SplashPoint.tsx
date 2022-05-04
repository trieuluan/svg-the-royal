import { SVGProps, useMemo } from "react";
import { styled } from "@mui/material";

const TOTAL_TIME = 6666;

const StyledG = styled("g")<{ delay: string | number }>`
  @keyframes Splash {
    from {
      transform: scale(1);
    }
    ${100.0 / 26}% {
      transform: scale(1.5);
    }
    ${200.0 / 26}% {
      transform: scale(1.5);
    }
    ${300.0 / 26}% {
      transform: scale(1);
    }
    to {
      transform: scale(1);
    }
  }
  > g {
    transform-origin: center;
    transform-box: fill-box;
    animation: Splash ${TOTAL_TIME}ms normal backwards ease-in-out;
    animation-iteration-count: infinite;
    animation-delay: ${(props: any) => props.delay * (TOTAL_TIME / 26)}ms;

    pointer-events: bounding-box;
    cursor: pointer;
    transition: transform 0.125s ease-in-out;
    will-change: transform;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export default function SplashPoint({
  id,
  children,
  ...props
}: SVGProps<SVGGElement>): JSX.Element {
  const delay = useMemo(() => id!.match(/(\d+)/)![0], [id]);
  console.count("splashpoint");
  return (
    <>
      <StyledG className={"splashpoint"} id={id} delay={delay} {...props}>
        <g>{children}</g>
      </StyledG>
    </>
  );
}
