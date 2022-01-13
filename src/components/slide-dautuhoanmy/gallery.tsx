import {
  Backdrop,
  BackdropProps,
  Box,
  Portal,
  styled,
  Typography,
} from "@mui/material";
import { HoanMySlidesData } from "../assets/hoanmy";
import MotionSlide, { MotionSlideHandle } from "./motion-slide";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import NextIcon from "./next-icon";
import PrevIcon from "./prev-icon";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "./close-icon";

const CaptionBox = styled(Box)`
  p {
    color: white;
    font-weight: 600;
    font-size: 20px;
    display: none;
    font-family: Raleway;
  }
  p:nth-of-type(2) {
    display: inline-block;
  }
`;

type GalleryProps = BackdropProps;
export default function Gallery({
  sx,
  open,
  onClose,
  slidesData,
  initial,
}: GalleryProps & {
  onClose: () => void;
  slidesData: HoanMySlidesData;
  initial: number;
}): JSX.Element {
  const mainRef = useRef<MotionSlideHandle>(null),
    childRef = useRef<MotionSlideHandle>(null),
    captionRef = useRef<HTMLDivElement>(null),
    [init, setInit] = useState(false);

  useEffect(() => {
    setInit(open);
  }, [open]);

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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto auto",
            gridGap: "1rem",
            padding: "1rem",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CaptionBox ref={captionRef}></CaptionBox>
          <Box></Box>
          <Box></Box>
          <CloseIcon
            style={{ height: "1.7rem", width: "1.7rem", cursor: "pointer" }}
            onClick={onClose}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          {init && (
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
                    <Portal container={captionRef.current}>
                      <Typography
                        sx={{
                          color: "white",
                        }}
                      >
                        {slide.layers[0].text}
                      </Typography>
                    </Portal>
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
          )}
        </Box>
        <Box
          sx={{
            height: "15vh",
            width: `${20 * slidesData.slides.length}vh`,
            alignSelf: "center",
          }}
        >
          <MotionSlide
            ref={childRef}
            slidesToShow={slidesData.slides.length}
            indicatorSxProps={{ display: "none" }}
            outerSx={{ pb: 2 }}
          >
            {slidesData.slides.map((slide) => (
              <Box key={slide.id} sx={{ height: "15vh" }}>
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
