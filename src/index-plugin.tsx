import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import SecondSlide from "./components/SecondSlide";
import FirstSlide from "./components/FirstSlide";
import { domAnimation, LazyMotion } from "framer-motion";

(
  [
    ["svg-animation-1", SecondSlide],
    ["svg-animation-2", FirstSlide],
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
