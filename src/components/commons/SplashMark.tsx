import { SVGProps, useEffect, useState } from "react";
import { styled } from "@mui/material";

const StyledG = styled("g")``;

export default function SplashMark(props: SVGProps<SVGGElement>): JSX.Element {
  const [slope, setSlope] = useState(1);

  useEffect(() => {
    let i = 0;
    const handler = setInterval(() => {
      setSlope(Math.sin(++i / 20.0) / 2 + 1);
    }, 1);

    return () => clearInterval(handler);
  }, []);

  return (
    <>
      <filter id="brightness">
        <feComponentTransfer>
          <feFuncR type="linear" slope={slope} />
          <feFuncG type="linear" slope={slope} />
          <feFuncB type="linear" slope={slope} />
        </feComponentTransfer>
      </filter>
      <StyledG {...props} filter={"url(#brightness)"} />
    </>
  );
}
