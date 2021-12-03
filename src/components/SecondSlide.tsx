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
import ThirdLabel from "./SecondSlide/ThirdLabel";
import ThirdLine from "./SecondSlide/ThirdLine";
import ThirdArea from "./SecondSlide/ThirdArea";
import FourthLabel from "./SecondSlide/FourthLabel";
import FourthLine from "./SecondSlide/FourthLine";
import FourthArea from "./SecondSlide/FourthArea";
import FifthLabel from "./SecondSlide/FifthLabel";
import FifthLine from "./SecondSlide/FifthLine";
import FifthArea from "./SecondSlide/FifthArea";
import SixthLabel from "./SecondSlide/SixthLabel";
import SixthLine from "./SecondSlide/SixthLine";
import SixthArea from "./SecondSlide/SixthArea";
import { SlideLabel } from "./SecondSlide/common";
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
        <SlideLabel sx={tlwh(55.78, 179.42, 611.88, 134.67)} />
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

          <ThirdLine sx={tlwh(450.69, 828.23, 428.34, 130.85)} />
          <ThirdLabel sx={tlwh(416, 179, 651.81, 71)} />
          <ThirdArea sx={tlwh(293.98, 1260.45, 361.46, 423.15)} />

          <FourthLine sx={tlwh(540.5, 824.12, 437.45, 202.04)} />
          <FourthLabel sx={tlwh(507, 179, 651.81, 71)} />
          <FourthArea sx={tlwh(705.35, 1265.35, 357.75, 50.44)} />

          <FifthLine sx={tlwh(635.81, 826.78, 435.79, 156.72)} />
          <FifthLabel sx={tlwh(601, 179, 651.81, 81.58)} />
          <FifthArea sx={tlwh(755.35, 1265.92, 352.41, 66.36)} />

          <SixthLine sx={tlwh(730.79, 829, 427.57, 116.75)} />
          <SixthLabel sx={tlwh(696, 179, 651.81, 71)} />
          <SixthArea sx={tlwh(813.97, 1268.65, 347.97, 100.64)} />
        </SlideContext.Provider>
      </Box>
    </AspectRatio>
  );
}
