import background from "./Slide2Mobile.png";
import { Box } from "@mui/material";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { SlideContext } from "./Context";
import { useState } from "react";
import { SlideLabel } from "./common";
import FirstLabelMobile from "./FirstLabelMobile";
import SecondLabelMobile from "./SecondLabelMobile";
import ThirdLabelMobile from "./ThirdLabelMobile";
import FourthLabelMobile from "./FourthLabelMobile";
import FifthLabelMobile from "./FifthLabelMobile";
import SixthLabelMobile from "./SixthLabelMobile";
import AspectRatio from "../commons/AspectRatio";
// import part1 from './Slide2Part1.svg';

const getXSize = (w: number) => `${w / 4.14}%`,
  getYSize = (h: number) => `${h / 8.96}%`;
export const tlwh = (y: number, x: number, w: number, h: number) => ({
  top: getYSize(y),
  left: getXSize(x),
  width: getXSize(w),
  height: getYSize(h),
});

type SecondSlideProps = unknown;
export default function SecondSlideMobile(
  props: SecondSlideProps
): JSX.Element {
  const [content, setContent] = useState("");
  return (
    <AspectRatio
      ratio={"414/896"}
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
        <SlideLabel sx={tlwh(62, 36, 284, 74)} />
        <SlideContext.Provider value={[content, setContent]}>
          {/*<FirstLine*/}
          {/*  sx={{*/}
          {/*    ...tlwh(235.54, 822.26, 434.31, 27.96),*/}
          {/*  }}*/}
          {/*/>*/}
          <FirstLabelMobile sx={tlwh(155.36, 35.07, 340.26, 29.45)} />

          {/*<SecondLine sx={{ ...tlwh(309.27, 826.4, 430.17, 47) }} />*/}
          <SecondLabelMobile sx={tlwh(205.53, 36.14, 339.19, 29.53)} />

          {/*<ThirdLine sx={tlwh(446.69, 828.23, 428.34, 130.85)} />*/}
          <ThirdLabelMobile sx={tlwh(255.58, 35.06, 340.28, 29.93)} />

          {/*<FourthLine sx={tlwh(540.5, 824.12, 437.45, 202.04)} />*/}
          <FourthLabelMobile sx={tlwh(306.88, 36.06, 339.28, 28.93)} />

          {/*<FifthLine sx={tlwh(635.81, 826.78, 435.79, 156.72)} />*/}
          <FifthLabelMobile sx={tlwh(357.72, 36.03, 339.3, 28.93)} />

          {/*<SixthLine sx={tlwh(730.79, 829, 427.57, 116.75)} />*/}
          <SixthLabelMobile sx={tlwh(405.93, 36.14, 339.19, 29.49)} />

          {/*<BuildingAreas sx={tlwh(405.93, 36.14, 339.19, 29.49)} />*/}
        </SlideContext.Provider>
      </Box>
    </AspectRatio>
  );
}
