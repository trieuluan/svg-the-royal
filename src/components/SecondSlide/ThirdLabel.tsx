import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";

type ThirdLabelProps = SvgIconProps;
export default function ThirdLabel(props: ThirdLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("third");
  return (
    <SvgIcon width="651.813" height="71" viewBox="0 0 651.813 71" {...props}>
      <g
        id="Group_546"
        data-name="Group 546"
        transform="translate(-179 -416)"
        {...labelProps}
      >
        <g
          id="Component_2_2"
          data-name="Component 2 – 2"
          transform="translate(179 416)"
          {...labelPathProps}
        >
          <path
            id="Path_1667"
            data-name="Path 1667"
            d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
          />
        </g>
        <text
          id="Tiện_Nghi_Hoàng_Kim"
          data-name="Tiện Nghi Hoàng Kim"
          transform="translate(207.969 471.271)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            Tiện Nghi Hoàng Kim
          </tspan>
        </text>
        <text
          id="ELIZABETH_LUXURY_APARTMENT"
          data-name="ELIZABETH LUXURY APARTMENT"
          transform="translate(209.29 445.699)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            ELIZABETH LUXURY APARTMENT
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(695.72 445.699)"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            TẦNG
          </tspan>
        </text>
        <text
          id="_05-21"
          data-name="05-21"
          transform="translate(685.225 471.271)"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            05-21
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
