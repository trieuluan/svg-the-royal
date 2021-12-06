import React, { useEffect } from "react";
import SecondSlide from "./components/SecondSlide";
import WebFont from "webfontloader";
import { domAnimation, LazyMotion } from "framer-motion";
import { HashRouter, Route, Routes } from "react-router-dom";
import FirstSlide from "./components/FirstSlide";

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
        </Routes>
      </HashRouter>
    </LazyMotion>
  );
}

export default App;
