import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type FourthLabelProps = SvgIconProps;
export default function FourthLabel(props: FourthLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("fourth");

  return (
    <SvgIcon width="651.813" height="71" viewBox="0 0 651.813 71" {...props}>
      <Defs />
      <g
        id="Group_565"
        data-name="Group 565"
        transform="translate(-179 -507)"
        {...labelProps}
      >
        <path
          id="Path_1685"
          data-name="Path 1685"
          d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
          transform="translate(179 507)"
          {...labelPathProps}
        />
        <text
          id="Tiện_Nghi_Hoàng_Kim"
          data-name="Tiện Nghi Hoàng Kim"
          transform="translate(208.63 556.583)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            Tiện Nghi Hoàng Kim
          </tspan>
        </text>
        <text
          id="LUXURY_FACITIES"
          data-name="LUXURY FACITIES"
          transform="translate(207.65 531.011)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            LUXURY FACITIES
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(695.72 531.01)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            TẦNG
          </tspan>
        </text>
        <text
          id="_03-04"
          data-name="03-04"
          transform="translate(685.225 556.583)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            03-04
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
