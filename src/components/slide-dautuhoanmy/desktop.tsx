import { HoanMySlidesData } from "../assets/hoanmy";
import { Box, styled, Typography } from "@mui/material";
import bg from "./bg-desktop.webp";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import useWindowDimensions from "../commons/responsives";
import MotionSlide from "./motion-slide";
import "./raleway.css";

type DesktopProps = {
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
    background-color: rgba(0, 0, 0, 0.46);
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

export default function Desktop(props: DesktopProps): JSX.Element {
  const { width, height } = useWindowDimensions();
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
          top: "calc(66.66vh - 1rem)",
          left: `${10000.0 / 1920}vw`,
          right: `${10000.0 / 1920}vw`,
        }}
      >
        <MotionSlide slidesToShow={5} speed={3000} animationSpeed={0.6}>
          {props.slidesData.slides.map((slide) => (
            <Box
              key={slide.id}
              data-key={slide.id}
              sx={{ position: "relative" }}
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
                {slide.layers[1].text}
              </StyledText>
            </Box>
          ))}
        </MotionSlide>
      </Box>
    </Box>
  );
}
