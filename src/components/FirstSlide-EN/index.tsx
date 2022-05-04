import { Responsive } from "../commons/responsives";

import loadable from "@loadable/component";

const Desktop = loadable(() => import("./FirstSlideDesktop"));
const Mobile = loadable(() => import("./FirstSlideMobile"));

type FirstSlideProps = {};
export default function FirstSlideEN(props: FirstSlideProps): JSX.Element {
  return <Responsive d={Desktop} m={Mobile} />;
}
