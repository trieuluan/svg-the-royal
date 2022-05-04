type DefsProps = unknown;

const gradientDirection = { x1: 0, y1: 0, x2: 1, y2: 0 } as const;

export default function Defs(props: DefsProps): JSX.Element {
  return (
    <defs>
      <linearGradient
        id="active"
        {...gradientDirection}
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#f0ecb9" />
        <stop offset="0.097" stop-color="#dfcb86" />
        <stop offset="0.236" stop-color="#caa348" />
        <stop offset="0.322" stop-color="#c39430" />
        <stop offset="0.404" stop-color="#cca346" />
        <stop offset="0.544" stop-color="#e6c980" />
        <stop offset="0.664" stop-color="#ffefb7" />
        <stop offset="0.788" stop-color="#e6c980" />
        <stop offset="0.931" stop-color="#cca346" />
        <stop offset="1" stop-color="#c39430" />
      </linearGradient>
      <linearGradient
        id="line"
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
      <linearGradient
        id="area"
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
  );
}
