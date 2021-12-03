import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type FifthAreaProps = SvgIconProps;
export default function FifthArea(props: FifthAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("fifth");
  return (
    <SvgIcon
      width="352.406"
      height="66.361"
      viewBox="0 0 352.406 66.361"
      {...props}
    >
      <Defs />
      <path
        id="Path_1677"
        data-name="Path 1677"
        d="M1618.33,4017.353H1265.924v50.078h0l97.871,16.282,248.957-9.774v-12.087l.538-15.059h3.5v-1.748s.675-2.66,1.04-4.61a15.248,15.248,0,0,1,.5-2.26Z"
        transform="translate(-1265.924 -4017.353)"
        {...areaProps}
      />
    </SvgIcon>
  );
}
