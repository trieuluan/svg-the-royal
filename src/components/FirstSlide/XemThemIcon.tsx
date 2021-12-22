import { SvgIcon, SvgIconProps } from "@mui/material";

type XemThemIconProps = SvgIconProps;
export default function XemThemIcon({
  sx,
  ...props
}: XemThemIconProps): JSX.Element {
  return (
    <SvgIcon
      width="181.799"
      height="57.338"
      viewBox="0 0 181.799 57.338"
      sx={{ width: 181.799, height: 57.338, ...sx }}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#f0ecb9" />
          <stop offset="0.006" stop-color="#f0ecb9" />
          <stop offset="0.119" stop-color="#dfcb86" />
          <stop offset="0.269" stop-color="#caa348" />
          <stop offset="0.341" stop-color="#c39430" />
          <stop offset="0.407" stop-color="#cca346" />
          <stop offset="0.544" stop-color="#e6c980" />
          <stop offset="0.664" stop-color="#ffefb7" />
          <stop offset="0.788" stop-color="#e6c980" />
          <stop offset="0.931" stop-color="#cca346" />
          <stop offset="1" stop-color="#c39430" />
        </linearGradient>
        <filter
          id="Rectangle_98"
          x="0"
          y="0"
          width="181.799"
          height="57.338"
          filterUnits="userSpaceOnUse"
        >
          <feOffset />
          <feGaussianBlur stdDeviation="0.704" result="blur" />
          <feFlood flood-opacity="0.4" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="linear-gradient-2"
          x1="-0.054"
          y1="-0.073"
          x2="0.978"
          y2="0.889"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#bd9d53" />
          <stop offset="0.071" stop-color="#caa145" />
          <stop offset="0.216" stop-color="#dcc57c" />
          <stop offset="0.362" stop-color="#f0ecb9" />
          <stop offset="0.451" stop-color="#dfcb86" />
          <stop offset="0.569" stop-color="#caa348" />
          <stop offset="0.625" stop-color="#c39430" />
          <stop offset="0.698" stop-color="#caa145" />
          <stop offset="0.849" stop-color="#dcc57c" />
          <stop offset="1" stop-color="#f0ecb9" />
        </linearGradient>
        <filter
          id="Rectangle_99"
          x="4.865"
          y="4.982"
          width="172.717"
          height="47.373"
          filterUnits="userSpaceOnUse"
        >
          <feOffset />
          <feGaussianBlur stdDeviation="0.645" result="blur-2" />
          <feFlood flood-opacity="0.4" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_696"
        data-name="Group 696"
        transform="translate(-1523.221 -3558.061)"
      >
        <g
          transform="matrix(1, 0, 0, 1, 1523.22, 3558.06)"
          filter="url(#Rectangle_98)"
        >
          <rect
            id="Rectangle_98-2"
            data-name="Rectangle 98"
            width="176.713"
            height="52.252"
            transform="translate(2.54 2.54)"
            stroke="#a31f26"
            stroke-miterlimit="10"
            stroke-width="0.862"
            fill="url(#linear-gradient)"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, 1523.22, 3558.06)"
          filter="url(#Rectangle_99)"
        >
          <rect
            id="Rectangle_99-2"
            data-name="Rectangle 99"
            width="167.99"
            height="42.646"
            transform="translate(7.23 7.35)"
            stroke="#a31f26"
            stroke-miterlimit="10"
            stroke-width="0.854"
            fill="url(#linear-gradient-2)"
          />
        </g>
        <text
          id="Xem_thêm_"
          data-name="Xem thêm "
          transform="translate(1556.298 3593.034)"
          fill="#a31f26"
          font-size="21"
          font-family="Montserrat-Bold, Montserrat"
          font-weight="700"
        >
          <tspan x="0" y="0">
            Xem thêm{" "}
          </tspan>
        </text>
      </g>
    </SvgIcon>
  );
}
