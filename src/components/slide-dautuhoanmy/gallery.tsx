import { Backdrop, BackdropProps, Box } from "@mui/material";
import { HoanMySlidesData } from "../assets/hoanmy";
import MotionSlide, { MotionSlideHandle } from "./motion-slide";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import NextIcon from "./next-icon";
import PrevIcon from "./prev-icon";
import { useRef } from "react";

type GalleryProps = BackdropProps;
export default function Gallery({
  sx,
  open,
  slidesData,
  initial,
}: GalleryProps & {
  slidesData: HoanMySlidesData;
  initial: number;
}): JSX.Element {
  const mainRef = useRef<MotionSlideHandle>(null),
    childRef = useRef<MotionSlideHandle>(null);

  return (
    <Backdrop
      open={open}
      sx={{
        bgcolor: "rgba(0,0,0,.75)",
        "& *": { boxSizing: "border-box" },
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: "100vw",
          height: "100vh",
          p: 1,
        }}
      >
        <Box></Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "20vw 1fr 20vw" }}>
            <Box
              sx={{
                alignSelf: "center",
                ml: 2,
                zIndex: 1201,
                cursor: "pointer",
              }}
              onClick={() => {
                mainRef.current?.prev();
                childRef.current?.prev();
              }}
            >
              <PrevIcon />
            </Box>
            <MotionSlide
              ref={mainRef}
              slidesToShow={1}
              indicatorSxProps={{ display: "none" }}
              outerSx={{ pb: 2, height: "100%" }}
              sx={{ height: "100%" }}
              gap={0}
            >
              {slidesData.slides.map((slide) => (
                <Box key={slide.id}>
                  <AspectRatio ratio={"4/3"}>
                    <img src={slide.params.bg.image} />
                  </AspectRatio>
                </Box>
              ))}
            </MotionSlide>
            <Box
              sx={{
                alignSelf: "center",
                mr: 2,
                zIndex: 1201,
                justifySelf: "end",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log(mainRef.current);
                mainRef.current?.next();
                childRef.current?.next();
              }}
            >
              <NextIcon />
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: "15vh" }}>
          <MotionSlide
            ref={childRef}
            slidesToShow={5}
            indicatorSxProps={{ display: "none" }}
            outerSx={{ pb: 2 }}
          >
            {slidesData.slides.map((slide) => (
              <Box key={slide.id}>
                <AspectRatio ratio={"4/3"}>
                  <img src={slide.params.bg.image} />
                </AspectRatio>
              </Box>
            ))}
          </MotionSlide>
        </Box>
      </Box>
    </Backdrop>
  );
}
