import { Responsive } from "../commons/responsives";
import loadable from "@loadable/component";
import { HoanMySlidesData } from "../assets/hoanmy";
import { useMemo } from "react";
import { cloneDeep } from "lodash";

const Desktop = loadable(() => import("./desktop")),
  Mobile = loadable(() => import("./mobile"));

type SlideDautuhoanmyProps = {
  slidesData: HoanMySlidesData;
};
export default function SlideDautuhoanmy(
  props: SlideDautuhoanmyProps
): JSX.Element {
  const slidesData = useMemo(() => {
    const rs = cloneDeep(props.slidesData);
    rs.slides = rs.slides.map((slide) => {
      const newSlide = { ...slide };
      newSlide.layers = {
        0: Object.values(newSlide.layers).filter((l) => l.text?.length > 0)[0]!,
      };
      return newSlide;
    });
    return rs;
  }, [props.slidesData]);
  return <Responsive d={Desktop} m={Mobile} slidesData={slidesData} />;
}
