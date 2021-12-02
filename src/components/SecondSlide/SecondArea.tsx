import { SvgIcon, SvgIconProps } from "@mui/material";
import { useContext } from "react";
import { SlideContext } from "./Context";

type SecondAreaProps = SvgIconProps;
export default function SecondArea(props: SecondAreaProps): JSX.Element {
  const [content, setContent] = useContext(SlideContext);
  return (
    <SvgIcon
      width="358.309"
      height="248.967"
      viewBox="0 0 358.309 248.967"
      {...props}
    >
      <path
        className={"pointable"}
        d="M1605.628,2406.414l-238.718-48.5-101.191,127.534v8.812l-1.018,1.013.237,69.46-1.3,1.384v1.853h1.735v38.909l95.639-93.449,260.935,39.968v-4.206l-6.471-1.313v-43.584l2.284-1.732v-86.217l-18.652-3.788Z"
        transform="translate(-1263.637 -2357.909)"
        opacity={content === "second" ? 0.55 : 0}
        onMouseEnter={() => setContent("second")}
        onMouseLeave={() => setContent("")}
      />
    </SvgIcon>
  );
}
