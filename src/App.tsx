import React, { useEffect } from "react";
import SecondSlide from "./components/SecondSlide";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat"],
      },
    });
  }, []);
  return <SecondSlide />;
}

export default App;
