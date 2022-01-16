import { SlideTienIchProps } from "./types";
import useWindowDimensions from "../commons/responsives";

export default function Desktop(props: SlideTienIchProps): JSX.Element {
  const { width, height } = useWindowDimensions();
  return <></>;
}
