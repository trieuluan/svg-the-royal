import { Responsive } from "../commons/responsives";
import loadable from "@loadable/component";

const Desktop = loadable(() => import("./Slide3Desktop")),
  Mobile = loadable(() => import("./Slide3Mobile"));

type Slide3Props = {};
export default function Slide3EN(props: Slide3Props): JSX.Element {
  return <Responsive d={Desktop} m={Mobile} />;
}
