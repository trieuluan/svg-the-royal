import { SvgIcon, SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";

type SecondLabelProps = SvgIconProps;
export default function SecondLabel(props: SecondLabelProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <SvgIcon viewBox="0 0 653.98 72.794" {...props}>
      <g transform="translate(-162.422 -4038.488)">
        <path
          id="Path_1278"
          data-name="Path 1278"
          d="M772.459,4110.281H163.422v-70.794H772.459l42.382,35.4Z"
          fill="#606060"
          stroke="#707070"
          stroke-miterlimit="10"
          stroke-width="2"
          opacity={content === "second" ? 1 : 0.3}
        />
        <text
          id="Dịch_Vụ_Hoàng_Kim"
          data-name="Dịch Vụ Hoàng Kim"
          transform="translate(193.29 4093.002)"
          fill="#fff"
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
          transform="translate(193.29 4067.43)"
          fill="#fff"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            BEST WESTERN LUXURY HOTEL
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(679.72 4070.011)"
          fill="#fff"
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
          transform="translate(669.225 4095.583)"
          fill="#fff"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            22-27
          </tspan>
        </text>
        <path
          id="Path_1278"
          data-name="Path 1278"
          d="M772.459,4110.281H163.422v-70.794H772.459l42.382,35.4Z"
          fill="#606060"
          stroke="#707070"
          stroke-miterlimit="10"
          stroke-width="15"
          opacity={0.01}
          className={"pointable"}
          onMouseEnter={() => setContent("second")}
          onMouseLeave={() => setContent("")}
        />
      </g>
    </SvgIcon>
  );
}
