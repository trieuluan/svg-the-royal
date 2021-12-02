import { SvgIcon, SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";

type FirstLabelProps = SvgIconProps;
export default function FirstLabel(props: FirstLabelProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <SvgIcon
      width="653.98"
      height="72.793"
      viewBox="0 0 653.98 72.793"
      {...props}
    >
      <g transform="translate(-162.422 -3941.38)">
        <path
          d="M772.459,4013.174H163.422V3942.38H772.459l42.382,35.4Z"
          fill="#606060"
          stroke="#707070"
          stroke-miterlimit="10"
          stroke-width="2"
          opacity={content === "first" ? 1 : 0.3}
        />
        <text
          id="Đỉnh_Sống_Hoàng_Kim"
          data-name="Đỉnh Sống Hoàng Kim"
          transform="translate(192.629 3997.279)"
          fill="#fff"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            Đỉnh Sống Hoàng Kim
          </tspan>
        </text>
        <text
          id="SAINT_PAUL_S_GARDEN"
          data-name="SAINT PAUL’S GARDEN"
          transform="translate(193.951 3971.706)"
          fill="#fff"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            SAINT PAUL’S GARDEN
          </tspan>
        </text>
        <text
          id="TẦNG"
          transform="translate(679.72 3971.706)"
          fill="#fff"
          font-size="14.746"
          font-family="Montserrat-Regular, Montserrat"
        >
          <tspan x="0" y="0">
            TẦNG
          </tspan>
        </text>
        <text
          id="_28-29"
          data-name="28-29"
          transform="translate(670.699 3997.279)"
          fill="#fff"
          font-size="21.798"
          font-family="Montserrat-SemiBold, Montserrat"
          font-weight="600"
        >
          <tspan x="0" y="0">
            28-29
          </tspan>
        </text>
        <path
          d="M772.459,4013.174H163.422V3942.38H772.459l42.382,35.4Z"
          fill="#606060"
          stroke="#707070"
          stroke-miterlimit="10"
          stroke-width="15"
          opacity={0.01}
          className={"pointable"}
          onMouseEnter={() => setContent("first")}
          onMouseLeave={() => setContent("")}
        />
      </g>
    </SvgIcon>
  );
}
