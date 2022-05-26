import { SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import { m } from "framer-motion";

type FifthAreaProps = SvgIconProps;
export default function FifthArea(props: FifthAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("fifth");
  return (
    <a href="/mat-bang-chi-tiet/?tab=phuc-suc-hoang-kim#mat-bang-chi-tiet">
    <m.path
      d="M1618.33,4017.353H1265.924v50.078h0l97.871,16.282,248.957-9.774v-12.087l.538-15.059h3.5v-1.748s.675-2.66,1.04-4.61a15.248,15.248,0,0,1,.5-2.26Z"
      transform="translate(0 -3262)"
      {...areaProps}
    />
    </a>
  );
}
