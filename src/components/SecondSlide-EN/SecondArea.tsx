import { SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import { m } from "framer-motion";

type SecondAreaProps = SvgIconProps;
export default function SecondArea(props: SecondAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("second");
  return (
    <a href="/en/mat-bang-chi-tiet/?tab=dich-vu-hoang-kim#mat-bang-chi-tiet">
    <m.path
      d="M1605.628,2406.414l-238.718-48.5-101.191,127.534v8.812l-1.018,1.013.237,69.46-1.3,1.384v1.853h1.735v38.909l95.639-93.449,260.935,39.968v-4.206l-6.471-1.313v-43.584l2.284-1.732v-86.217l-18.652-3.788Z"
      transform="translate(0 -2220)"
      {...areaProps}
    />
    </a>
  );
}
