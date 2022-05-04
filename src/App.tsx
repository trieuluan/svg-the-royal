import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { domAnimation, LazyMotion } from "framer-motion";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide/SecondSlide";
import Slide3 from "./components/Slide3";
import SlideDautuhoanmy from "./components/slide-dautuhoanmy";
import { hoanmyDemo } from "./components/assets/hoanmy";
import SlideTienIch from "./components/slide-tien-ich";
import { demo as tienIchDemo } from "./components/slide-tien-ich/demo";
import SlideThuVien from "./components/slide-thu-vien";
import { demo as ThuVienDemo } from "./components/slide-thu-vien/demo";
import SlideDautu from "./components/slide-dautu";
import FirstSlideEN from "./components/FirstSlide-EN";
import SecondSlideEN from "./components/SecondSlide-EN/SecondSlide";
import Slide3EN from "./components/Slide3-EN";

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
          <Route path={"1-en"} element={<SecondSlideEN />} />
          <Route path={"2"} element={<FirstSlide />} />
          <Route path={"2-en"} element={<FirstSlideEN />} />
          <Route path={"3"} element={<Slide3 />} />
          <Route path={"3-en"} element={<Slide3EN />} />
          <Route
            path={"dau-tu-hoan-my"}
            element={<SlideDautuhoanmy slidesData={hoanmyDemo} mode={"demo"} />}
          />
          <Route
            path={"tien-ich"}
            element={<SlideTienIch list={tienIchDemo} />}
          />
          <Route
            path={"thu-vien"}
            element={<SlideThuVien list={ThuVienDemo} />}
          />
          <Route
            path={"dau-tu"}
            element={<SlideDautu slidesData={hoanmyDemo} mode={"demo"} />}
          />
        </Routes>
      </HashRouter>
    </LazyMotion>
  );
}

export default App;
