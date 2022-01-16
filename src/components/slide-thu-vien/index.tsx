import { SlideThuVienProps } from "./types";
import { Responsive } from "../commons/responsives";
import loadable from "@loadable/component";

const Desktop = loadable(() => import("./desktop")),
  Mobile = loadable(() => import("./mobile"));

export default function SlideThuVien(props: SlideThuVienProps): JSX.Element {
  return <Responsive d={Desktop} m={Mobile} list={props.list} />;
}
