import { SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import { m } from "framer-motion";

type FourthAreaProps = SvgIconProps;
export default function FourthArea(props: FourthAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("fourth");
  return (
    <a href="/mat-bang-chi-tiet/?tab=tien-ich-hoang-kim#mat-bang-chi-tiet">
    <m.path
      d="M1618.33,4021.75l-255.987-4.4-99.349,11.248,2.93.708v14.037h-3.569v3.623l2.834.423v20.039l97.154-.78,255.987,1.142v-5.31H1615.1v-18.652h4.758s.571-4.587,0-4.587H1615.1v-16.368Z"
      transform="translate(0 -3312)"
      {...areaProps}
    />
    </a>
  );
}
