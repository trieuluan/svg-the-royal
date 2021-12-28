import background from "./Slide2.webp";
import { Box, styled } from "@mui/material";
import FirstLabel from "./FirstLabel";
import FirstLine from "./FirstLine";
import SecondLabel from "./SecondLabel";
import { SlideContext } from "./Context";
import { useState } from "react";
import SecondLine from "./SecondLine";
import ThirdLabel from "./ThirdLabel";
import ThirdLine from "./ThirdLine";
import FourthLabel from "./FourthLabel";
import FourthLine from "./FourthLine";
import FifthLabel from "./FifthLabel";
import FifthLine from "./FifthLine";
import SixthLabel from "./SixthLabel";
import SixthLine from "./SixthLine";
import { SlideLabel } from "./common";
import BuildingAreas from "./BuildingAreas";
import AspectRatio from "../commons/AspectRatio";
// import part1 from './Slide2Part1.svg';

const getXSize = (w: number) => `${w / 19.1984}%`,
  getYSize = (h: number) => `${h / 9.2927}%`;
export const tlwh = (y: number, x: number, w: number, h: number) => ({
  top: getYSize(y),
  left: getXSize(x),
  width: getXSize(w),
  height: getYSize(h),
});

const Bg = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: bottom;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

type SecondSlideProps = unknown;
export default function SecondSlideDesktop(
  props: SecondSlideProps
): JSX.Element {
  const [content, setContent] = useState("");
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <Box sx={{ bottom: 0, right: 0, left: 0, position: "absolute" }}>
        <Bg src={background} />
        <AspectRatio
          ratio={"1919.84/929.27"}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
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
      </Box>
    </Box>
  );
}
