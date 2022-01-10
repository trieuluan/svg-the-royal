import { HoanMySlidesData } from "../assets/hoanmy";
import { Box, Stack, styled } from "@mui/material";
import bg from "./bg-desktop.webp";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import useWindowDimensions from "../commons/responsives";
import MotionSlide from "./motion-slide";

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
          top: "66.66vh",
          left: `${10000.0 / 1920}vw`,
          right: `${10000.0 / 1920}vw`,
        }}
      >
        <MotionSlide slidesToShow={5} speed={3000}>
          {props.slidesData.slides.map((slide) => (
            <Stack gap={2} key={slide.id} data-key={slide.id}>
              <AspectRatio ratio={"4/3"}>
                <img src={slide.params.bg.image} />
              </AspectRatio>
            </Stack>
          ))}
        </MotionSlide>
      </Box>
    </Box>
  );
}
