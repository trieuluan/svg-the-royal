import { Responsive } from "../commons/responsives";
import loadable from "@loadable/component";
import { HoanMySlidesData } from "../assets/hoanmy";

const Desktop = loadable(() => import("./desktop")),
  Mobile = loadable(() => import("./mobile"));

type SlideDautuhoanmyProps = {
  slidesData: HoanMySlidesData;
};
export default function SlideDautuhoanmy(
  props: SlideDautuhoanmyProps
): JSX.Element {
  return <Responsive d={Desktop} m={Mobile} slidesData={props.slidesData} />;
}
