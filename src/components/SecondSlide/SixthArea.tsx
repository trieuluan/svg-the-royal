import { SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import { m } from "framer-motion";

type SixthAreaProps = SvgIconProps;
export default function SixthArea(props: SixthAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("sixth");
  return (
    <a href="/mat-bang-chi-tiet/?tab=thoi-van-hoang-kim#mat-bang-chi-tiet">
    <m.path
      d="M1267.646,5249.971v67.515l107.407,33.13,240.563-20.261v-79.416l-240.563,5.787Z"
      transform="translate(1 -4436)"
      {...areaProps}
    />
    </a>
  );
}
