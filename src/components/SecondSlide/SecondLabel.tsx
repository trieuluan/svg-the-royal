import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type SecondLabelProps = SvgIconProps;
export default function SecondLabel(props: SecondLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("second");
  return (
    <SvgIcon width="651.813" height="71" viewBox="0 0 651.813 71" {...props}>
      <Defs />
      <g
        id="Group_545"
        data-name="Group 545"
        transform="translate(-179 -324)"
        {...labelProps}
      >
        <path
          id="Path_1673"
          data-name="Path 1673"
          d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
          transform="translate(179 324)"
          {...labelPathProps}
        />
        <text
          id="Dịch_Vụ_Hoàng_Kim"
          data-name="Dịch Vụ Hoàng Kim"
          transform="translate(209.29 378.002)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            Dịch Vụ Hoàng Kim
          </tspan>
        </text>
        <text
          id="BEST_WESTERN_LUXURY_HOTEL"
          data-name="BEST WESTERN LUXURY HOTEL"
          transform="translate(209.29 352.43)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            BEST WESTERN LUXURY HOTEL
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(695.72 355.011)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            TẦNG
          </tspan>
        </text>
        <text
          id="_22-27"
          data-name="22-27"
          transform="translate(685.225 380.583)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            22-27
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
