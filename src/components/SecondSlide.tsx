import { AspectRatio } from "@hungphongbk/vth-sdk";
import background from "./Slide2.png";
import { Box } from "@mui/material";
import { sxFullSize } from "@hungphongbk/vth-sdk/dist/utils/predefinedSx";
import FirstLabel from "./SecondSlide/FirstLabel";
import FirstLine from "./SecondSlide/FirstLine";
import SecondLabel from "./SecondSlide/SecondLabel";
import FirstArea from "./SecondSlide/FirstArea";
import { SlideContext } from "./SecondSlide/Context";
import { useState } from "react";
import SecondLine from "./SecondSlide/SecondLine";
import SecondArea from "./SecondSlide/SecondArea";
// import part1 from './Slide2Part1.svg';

const getXSize = (w: number) => `${w / 19.1984}%`,
  getYSize = (h: number) => `${h / 9.2927}%`,
  tlwh = (y: number, x: number, w: number, h: number) => ({
    top: getYSize(y),
    left: getXSize(x),
    width: getXSize(w),
    height: getYSize(h),
  });

type SecondSlideProps = unknown;
export default function SecondSlide(props: SecondSlideProps): JSX.Element {
  const [content, setContent] = useState("");
  return (
    <AspectRatio
      ratio={"1919.84/929.27"}
      sx={{
        "& img": {
          ...sxFullSize,
          top: 0,
          left: 0,
          objectFit: "cover",
        },
      }}
    >
      <Box
        sx={{
          "& >*": { position: "absolute" },
          "& .pointable": {
            cursor: "pointer",
          },
        }}
      >
        <img src={background} />
        <SlideContext.Provider value={[content, setContent]}>
          <FirstLine
            sx={{
              ...tlwh(238.54, 822.26, 434.31, 27.96),
            }}
          />
          <FirstLabel
            sx={{
              ...tlwh(231, 179, 651.813, 71),
            }}
          />
          <FirstArea sx={{ ...tlwh(109.28, 1270.06, 339.76, 153.04) }} />
          <SecondLine sx={{ ...tlwh(309.44, 826.4, 430.17, 47) }} />
          <SecondLabel sx={tlwh(320, 179, 651.81, 71)} />
          <SecondArea sx={{ ...tlwh(137.91, 1263.64, 358.31, 248.97) }} />
        </SlideContext.Provider>
      </Box>
    </AspectRatio>
  );
}
