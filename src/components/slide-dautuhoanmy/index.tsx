import { Responsive } from "../commons/responsives";
import loadable from "@loadable/component";

const Desktop = loadable(() => import("./desktop")),
  Mobile = loadable(() => import("./mobile"));

type SlideDautuhoanmyProps = {};
export default function SlideDautuhoanmy(
  props: SlideDautuhoanmyProps
): JSX.Element {
  return <Responsive d={Desktop} m={Mobile} />;
}
