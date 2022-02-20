import { Responsive } from "../commons/responsives";
import { useMemo } from "react";
import { cloneDeep } from "lodash";
import { HoanMySlidesData } from "../assets/hoanmy";
import loadable from "@loadable/component";
// Import css files
import "../commons/fonts.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const Desktop = loadable(() => import("./desktop")),
  Mobile = loadable(() => import("./mobile"));

type SlideDautuhoanmyProps = {
  slidesData: HoanMySlidesData;
  mode: "demo" | "live";
};

export default function SlideDautu(props: SlideDautuhoanmyProps): JSX.Element {
  const slidesData = useMemo(() => {
    const rs = cloneDeep(props.slidesData);
    rs.slides = rs.slides.map((slide) => {
      const newSlide = { ...slide };
      newSlide.layers = {
        0: Object.values(newSlide.layers).filter((l) => l.text?.length > 0)[0]!,
      };
      if (props.mode === "live")
        newSlide.params.bg.image = `https://theroyal.vn/royal/wp-content/${newSlide.params.bg.image}`;
      return newSlide;
    });
    return rs;
  }, [props.mode, props.slidesData]);
  console.log(props);
  return <Responsive d={Desktop} m={Mobile} slidesData={slidesData} />;
}
