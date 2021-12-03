import React, { useEffect } from "react";
import SecondSlide from "./components/SecondSlide";
import WebFont from "webfontloader";
import { domAnimation, LazyMotion } from "framer-motion";

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
      <SecondSlide />
    </LazyMotion>
  );
}

export default App;
