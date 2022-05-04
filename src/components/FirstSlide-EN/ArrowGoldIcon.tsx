import { SvgIcon } from "@mui/material";

type ArrowGoldIconProps = {};
export default function ArrowGoldIcon(props: ArrowGoldIconProps): JSX.Element {
  return (
    <SvgIcon
      width="7.174"
      height="11.229"
      viewBox="0 0 7.174 11.229"
      sx={{ width: 7.174, height: 11.229, mr: 0.5 }}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#c39430" />
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
      </defs>
      <path
        id="Path_1749"
        data-name="Path 1749"
        d="M762.478,9461.081l7.174,5.859-7.174,5.37"
        transform="translate(-762.478 -9461.081)"
        fill="url(#linear-gradient)"
      />
    </SvgIcon>
  );
}
