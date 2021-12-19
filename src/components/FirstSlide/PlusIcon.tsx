import { SvgIcon, SvgIconProps } from "@mui/material";

type PlusIconProps = {};
export default function PlusIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon
      width="25.716"
      height="25.717"
      viewBox="0 0 25.716 25.717"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#d3af76" />
          <stop offset="0.106" stop-color="#bc9a5a" />
          <stop offset="0.216" stop-color="#a98843" />
          <stop offset="0.261" stop-color="#b3974e" />
          <stop offset="0.349" stop-color="#cfbf6e" />
          <stop offset="0.42" stop-color="#eae58b" />
          <stop offset="0.429" stop-color="#e7e187" />
          <stop offset="0.582" stop-color="#c6ac57" />
          <stop offset="0.657" stop-color="#ba9845" />
          <stop offset="0.665" stop-color="#b89643" />
          <stop offset="0.833" stop-color="#9a7d2d" />
          <stop offset="0.934" stop-color="#ad8f42" />
          <stop offset="0.999" stop-color="#bd9d53" />
          <stop offset="1" stop-color="#bd9d53" />
        </linearGradient>
      </defs>
      <g id="Group_361" data-name="Group 361" transform="translate(0.38 0.38)">
        <circle
          id="Ellipse_39"
          data-name="Ellipse 39"
          cx="12.478"
          cy="12.478"
          r="12.478"
          fill="none"
          stroke="#ae7f22"
          stroke-miterlimit="10"
          stroke-width="0.76"
        />
        <g
          id="Group_360"
          data-name="Group 360"
          transform="translate(7.835 7.849)"
        >
          <g id="Group_359" data-name="Group 359">
            <path
              id="Path_1477"
              data-name="Path 1477"
              d="M1026.831,3234.568h3.969V3230.6h1.359v3.969h3.96v1.359h-3.96v3.959H1030.8v-3.959h-3.969Z"
              transform="translate(-1026.831 -3230.599)"
              fill="url(#linear-gradient)"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
