type DefsProps = unknown;
export default function Defs(props: DefsProps): JSX.Element {
  return (
    <defs>
      <linearGradient
        id="active"
        x1="-0.026"
        y1="-0.026"
        x2="1"
        y2="1.048"
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
        id="inactive"
        x1="-0.026"
        y1="-0.026"
        x2="1"
        y2="1.048"
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
    </defs>
  );
}
