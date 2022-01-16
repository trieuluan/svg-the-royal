import { Box, styled, Typography } from "@mui/material";
import useWindowDimensions from "../commons/responsives";
import { useMemo, useState } from "react";
import { range } from "lodash";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import bg from "./bg-mobile.webp";
import MotionSlide from "./motion-slide";
import Gallery from "./gallery";
import { HoanMySlidesData } from "../assets/hoanmy";

type MobileProps = {
  slidesData: HoanMySlidesData;
};
const Bg = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;
const BgBox = styled(Box)`
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: block;
    content: "";
  }
`;
const StyledText = styled(Typography)`
  color: #a01f26;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
  font-family: Raleway;
  display: inline-block;

  will-change: transform;
  transition: transform 0.6s ease;
  transform: scale(1);
  transform-origin: top center;
  .center & {
    transform: translateY(-0.5rem) scale(0.75);
  }
`;
export default function Mobile(props: MobileProps): JSX.Element {
  const { width, height } = useWindowDimensions(),
    [showGallery, setShowGallery] = useState(-1);

  const gallerySlideData = useMemo(() => {
    const slideData = [...props.slidesData.slides];
    if (showGallery < 0) return { slides: slideData };
    range(showGallery).forEach(() => {
      const last = slideData.shift()!;
      slideData.push(last);
    });
    return { slides: slideData };
  }, [props.slidesData, showGallery]);

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
      <BgBox
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <AspectRatio ratio={`${width}/${(height * 2) / 3}`}>
          <Bg src={bg} />
        </AspectRatio>
      </BgBox>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: `${10000.0 / 1920}vw`,
          right: `${10000.0 / 1920}vw`,
        }}
      >
        <MotionSlide
          slidesToShow={1}
          speed={showGallery >= 0 ? 0 : 3000}
          animationSpeed={0.6}
          indicatorSxProps={{
            width: "auto",
            pb: 4,
            alignSelf: "center",
          }}
          centerMode
          sx={{
            transform: `translateY(-50%)`,
            height: 300,
          }}
          outerSx={{ display: "flex", flexDirection: "column" }}
        >
          {props.slidesData.slides.map((slide, index) => (
            <Box
              key={slide.id}
              data-key={slide.id}
              data-index={index}
              sx={{ position: "relative", cursor: "pointer" }}
              onClick={() => setShowGallery(index - 1)}
            >
              <AspectRatio ratio={"4/3"}>
                <img src={slide.params.bg.image} />
              </AspectRatio>
              <StyledText
                sx={{
                  position: "absolute",
                  top: `calc(100% + 16px)`,
                  left: 0,
                  right: 0,
                }}
              >
                {slide.layers[0].text}
              </StyledText>
            </Box>
          ))}
        </MotionSlide>
        {showGallery >= 0 && (
          <Gallery
            open={true}
            slidesData={gallerySlideData}
            initial={1}
            onClose={() => setShowGallery(-1)}
          />
        )}
      </Box>
    </Box>
  );
}
