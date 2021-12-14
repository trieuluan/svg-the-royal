import { SVGProps, useMemo } from "react";
import { styled } from "@mui/material";

const StyledG = styled("g")<{ delay: string | number }>`
  transform-origin: center;
  transform-box: fill-box;
  animation: Splash 0.75s normal backwards ease-in-out;
  animation-iteration-count: 1;
  animation-delay: ${(props: any) => props.delay * 150}ms;

  pointer-events: bounding-box;
  cursor: pointer;
  transition: transform 0.125s ease-in-out;
  will-change: transform;
  &:hover {
    transform: scale(1.3);
  }
`;

export default function SplashPoint({
  id,
  ...props
}: SVGProps<SVGGElement>): JSX.Element {
  const delay = useMemo(() => id!.match(/(\d+)/)![0], [id]);
  return (
    <>
      <StyledG
        className={"splashpoint"}
        id={id}
        delay={delay}
        transform-origin={"center"}
        {...props}
      />
    </>
  );
}
