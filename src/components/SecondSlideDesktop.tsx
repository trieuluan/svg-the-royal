import background from "./Slide2.png";
import { Box } from "@mui/material";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import FirstLabel from "./SecondSlide/FirstLabel";
import FirstLine from "./SecondSlide/FirstLine";
import SecondLabel from "./SecondSlide/SecondLabel";
import { SlideContext } from "./SecondSlide/Context";
import { useState } from "react";
import SecondLine from "./SecondSlide/SecondLine";
import ThirdLabel from "./SecondSlide/ThirdLabel";
import ThirdLine from "./SecondSlide/ThirdLine";
import FourthLabel from "./SecondSlide/FourthLabel";
import FourthLine from "./SecondSlide/FourthLine";
import FifthLabel from "./SecondSlide/FifthLabel";
import FifthLine from "./SecondSlide/FifthLine";
import SixthLabel from "./SecondSlide/SixthLabel";
import SixthLine from "./SecondSlide/SixthLine";
import { SlideLabel } from "./SecondSlide/common";
import BuildingAreas from "./SecondSlide/BuildingAreas";
import AspectRatio from "./commons/AspectRatio";
// import part1 from './Slide2Part1.svg';

const getXSize = (w: number) => `${w / 19.1984}%`,
  getYSize = (h: number) => `${h / 9.2927}%`;
export const tlwh = (y: number, x: number, w: number, h: number) => ({
  top: getYSize(y),
  left: getXSize(x),
  width: getXSize(w),
  height: getYSize(h),
});

type SecondSlideProps = unknown;
export default function SecondSlideDesktop(
  props: SecondSlideProps
): JSX.Element {
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
              ...tlwh(235.54, 822.26, 434.31, 27.96),
            }}
          />
          <FirstLabel sx={tlwh(228, 179, 651.81, 71)} />

          <SecondLine sx={{ ...tlwh(309.27, 826.4, 430.17, 47) }} />
          <SecondLabel sx={tlwh(320, 179, 651.81, 71)} />

          <ThirdLine sx={tlwh(446.69, 828.23, 428.34, 130.85)} />
          <ThirdLabel sx={tlwh(412, 179, 651.81, 71)} />

          <FourthLine sx={tlwh(540.5, 824.12, 437.45, 202.04)} />
          <FourthLabel sx={tlwh(507, 179, 651.81, 71)} />

          <FifthLine sx={tlwh(635.81, 826.78, 435.79, 156.72)} />
          <FifthLabel sx={tlwh(601, 179, 651.81, 71)} />

          <SixthLine sx={tlwh(730.79, 829, 427.57, 116.75)} />
          <SixthLabel sx={tlwh(696, 179, 651.81, 71)} />

          <BuildingAreas sx={tlwh(109.28, 1260.45, 361.49, 805.33)} />
        </SlideContext.Provider>
      </Box>
    </AspectRatio>
  );
}
