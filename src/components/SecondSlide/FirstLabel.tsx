import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type FirstLabelProps = SvgIconProps;

export default function FirstLabel(props: FirstLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("first");
  return (
    <SvgIcon width="651.813" height="71" viewBox="0 0 651.813 71" {...props}>
      <Defs />
      <g
        id="Group_536"
        data-name="Group 536"
        transform="translate(-179 -231)"
        {...labelProps}
      >
        <path
          id="Path_1665"
          data-name="Path 1665"
          d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
          transform="translate(179 231)"
          {...labelPathProps}
        />
        <text
          id="Đỉnh_Sống_Hoàng_Kim"
          data-name="Đỉnh Sống Hoàng Kim"
          transform="translate(213.629 282.278)"
          font-size="21.798"
          font-family="Raleway-SemiBold, Raleway"
          font-weight="600"
        >
          <tspan x="0" y="0">
            Đ
          </tspan>
          <tspan
            y="0"
            font-family="Helvetica-Bold, Helvetica"
            font-weight="700"
          >
            ỉ
          </tspan>
          <tspan y="0">nh S</tspan>
          <tspan
            y="0"
            font-family="Helvetica-Bold, Helvetica"
            font-weight="700"
          >
            ố
          </tspan>
          <tspan y="0">ng Hoàng Kim</tspan>
        </text>
        <text
          id="SAINT_PAUL_S_GARDEN"
          data-name="SAINT PAUL’S GARDEN"
          transform="translate(214.951 256.706)"
          font-size="14.746"
          font-family="Raleway"
        >
          <tspan x="0" y="0">
            SAINT PAUL’S GARDEN
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(695.721 256.706)"
          font-size="14.746"
          font-family="Raleway"
        >
          <tspan x="0" y="0">
            T
          </tspan>
          <tspan y="0" font-family="Helvetica">
            Ầ
          </tspan>
          <tspan y="0">NG</tspan>
        </text>
        <text
          id="_28-29"
          data-name="28-29"
          transform="translate(686.699 282.278)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            28-29
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
