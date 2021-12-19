import { PropsWithChildren } from "react";
import { Responsive } from "../commons/responsives";
import loadable from "@loadable/component";

const Desktop = loadable(() => import("./SecondSlideDesktop")),
  Mobile = loadable(() => import("./SecondSlideMobile"));

type Props = PropsWithChildren<unknown>;
export default function SecondSlide(props: Props): JSX.Element {
  return <Responsive d={Desktop} m={Mobile} />;
}
