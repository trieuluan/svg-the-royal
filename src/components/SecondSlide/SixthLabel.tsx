import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type SixthLabelProps = SvgIconProps;
export default function SixthLabel(props: SixthLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("sixth");
  return (
    <SvgIcon width="651.813" height="71" viewBox="0 0 651.813 71" {...props}>
      <Defs />
      <g
        id="Group_567"
        data-name="Group 567"
        transform="translate(-179 -696)"
        {...labelProps}
      >
        <g
          id="Component_1_6"
          data-name="Component 1 – 6"
          transform="translate(179 696)"
        >
          <path
            id="Path_1670"
            data-name="Path 1670"
            d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
            {...labelPathProps}
          />
        </g>
        <text
          id="Thời_Vận_Hoàng_Kim"
          data-name="Thời Vận Hoàng Kim"
          transform="translate(311.139 751.146)"
          font-size="21.798"
          font-family="Raleway-SemiBold, Raleway"
          font-weight="600"
        >
          <tspan x="-106.211" y="0">
            Th
          </tspan>
          <tspan
            y="0"
            font-family="Helvetica-Bold, Helvetica"
            font-weight="700"
          >
            ờ
          </tspan>
          <tspan y="0">i V</tspan>
          <tspan
            y="0"
            font-family="Helvetica-Bold, Helvetica"
            font-weight="700"
          >
            ậ
          </tspan>
          <tspan y="0">n Hoàng Kim</tspan>
        </text>
        <text
          id="BALLEGIO_GAME_CENTER"
          data-name="BALLEGIO GAME CENTER"
          transform="translate(207.617 725.574)"
          font-size="14.746"
          font-family="Raleway"
        >
          <tspan x="0" y="0">
            BALLEGIO GAME CENTER
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(695.721 725.574)"
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
          id="B1-B2"
          transform="translate(685.225 751.146)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            B1-B2
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
