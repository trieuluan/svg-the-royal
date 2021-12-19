import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import FirstSlide from "./components/FirstSlide";
import { domAnimation, LazyMotion } from "framer-motion";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Slide3 from "./components/Slide3";

(
  [
    ["svg-animation-1", SecondSlide],
    ["svg-animation-2", FirstSlide],
    ["svg-animation-3", Slide3],
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
