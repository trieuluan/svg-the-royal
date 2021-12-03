import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type SixthAreaProps = SvgIconProps;
export default function SixthArea(props: SixthAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("sixth");
  return (
    <SvgIcon
      width="347.97"
      height="100.645"
      viewBox="0 0 347.97 100.645"
      {...props}
    >
      <Defs />
      <path
        id="Path_1678"
        data-name="Path 1678"
        d="M1267.646,5249.971v67.515l107.407,33.13,240.563-20.261v-79.416l-240.563,5.787Z"
        transform="translate(-1267.646 -5249.971)"
        {...areaProps}
      />
    </SvgIcon>
  );
}
