import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import FirstSlide from "./components/FirstSlide";
import { domAnimation, LazyMotion } from "framer-motion";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Slide3 from "./components/Slide3";
import SlideDautuhoanmy from "./components/slide-dautuhoanmy";
import { HoanMySlidesData } from "./components/assets/hoanmy";
import SlideTienIch from "./components/slide-tien-ich";
import { SlideTienIchData } from "./components/slide-tien-ich/types";
import SlideThuVien from "./components/slide-thu-vien";
import { SlideThuVienData } from "./components/slide-thu-vien/types";

(
  [
    ["svg-animation-1", SecondSlide],
    ["svg-animation-2", FirstSlide],
    ["svg-animation-3", Slide3],
    [
      "svg-animation-dau-tu-hoan-my",
      () => (
        <SlideDautuhoanmy
          mode={"live"}
          slidesData={
            // @ts-ignore
            JSON.parse(
              document.getElementById("__SLIDE_DATA_DAU_TU_HOAN_MY__")!
                .textContent!
            ) as unknown as HoanMySlidesData
          }
        />
      ),
    ],
    [
      "svg-animation-tien-ich",
      () => (
        <SlideTienIch
          list={
            // @ts-ignore
            JSON.parse(
              document.getElementById("__SLIDE_TIEN_ICH__")!.textContent!
            ) as unknown as SlideTienIchData[]
          }
        />
      ),
    ],
    [
      "svg-animation-thu-vien",
      () => (
        <SlideThuVien
          list={
            // @ts-ignore
            JSON.parse(
              document.getElementById("__SLIDE_THU_VIEN__")!.textContent!
            ) as unknown as SlideThuVienData[]
          }
        />
      ),
    ],
  ] as [string, ComponentType<any>][]
).forEach(([id, Component]) => {
  const node = document.getElementById(id);
  if (node)
    ReactDOM.render(
      <React.StrictMode>
        <LazyMotion features={domAnimation}>
          <Component />
        </LazyMotion>
      </React.StrictMode>,
      node
    );
});
