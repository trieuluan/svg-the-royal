import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { domAnimation, LazyMotion } from "framer-motion";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Slide3 from "./components/Slide3";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat"],
      },
    });
  }, []);
  return (
    <LazyMotion features={domAnimation}>
      <HashRouter>
        <Routes>
          <Route path={"1"} element={<SecondSlide />} />
          <Route path={"2"} element={<FirstSlide />} />
          <Route path={"3"} element={<Slide3 />} />
        </Routes>
      </HashRouter>
    </LazyMotion>
  );
}

export default App;
