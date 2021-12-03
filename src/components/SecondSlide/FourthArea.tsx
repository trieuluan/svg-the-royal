import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type FourthAreaProps = SvgIconProps;
export default function FourthArea(props: FourthAreaProps): JSX.Element {
  const { areaProps } = useSlideContext("fourth");
  return (
    <SvgIcon
      width="357.754"
      height="50.44"
      viewBox="0 0 357.754 50.44"
      {...props}
    >
      <Defs />
      <path
        id="Path_1677"
        data-name="Path 1677"
        d="M1618.33,4021.75l-255.987-4.4-99.349,11.248,2.93.708v14.037h-3.569v3.623l2.834.423v20.039l97.154-.78,255.987,1.142v-5.31H1615.1v-18.652h4.758s.571-4.587,0-4.587H1615.1v-16.368Z"
        transform="translate(-1262.355 -4017.353)"
        {...areaProps}
      />
    </SvgIcon>
  );
}
