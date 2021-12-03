import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type FifthLabelProps = SvgIconProps;
export default function FifthLabel(props: FifthLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("fifth");
  return (
    <SvgIcon
      width="651.813"
      height="81.583"
      viewBox="0 0 651.813 81.583"
      {...props}
    >
      <Defs />
      <g
        id="Group_572"
        data-name="Group 572"
        transform="translate(-179 -601)"
        {...labelProps}
      >
        <path
          id="Path_1690"
          data-name="Path 1690"
          d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
          transform="translate(179 601)"
          {...labelPathProps}
        />
        <text
          id="Phục_Sức_Hoàng_Kim_"
          data-name="Phục Sức Hoàng Kim
"
          transform="translate(208.63 650.583)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            Phục Sức Hoàng Kim
          </tspan>
          <tspan x="0" y="26.157"></tspan>
        </text>
        <text
          id="VICTORIA_SHOPPING_CENTER"
          data-name="VICTORIA SHOPPING CENTER"
          transform="translate(207.65 625.011)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            VICTORIA SHOPPING CENTER
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(695.72 625.01)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            TẦNG
          </tspan>
        </text>
        <text
          id="_01-02"
          data-name="01-02"
          transform="translate(685.225 650.583)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            01-02
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
