import { SlideTienIchProps } from "./types";
import useWindowDimensions from "../commons/responsives";
import { Box, styled } from "@mui/material";
import MotionSlide, {
  MotionSlideHandle,
} from "../slide-dautuhoanmy/motion-slide";
import AspectRatio from "../commons/AspectRatio";
import logo from "./logo.webp";
import { useRef } from "react";
import { m } from "framer-motion";
import GoldTypography from "../commons/GoldTypography";

const MotionTypo = m(styled(GoldTypography)`
  filter: brightness(90%);
  font-family: Baskvill, serif;
  position: fixed;
  left: 5vw;
  bottom: 8vh;
  font-size: 40vh;
`);

export default function Desktop({ list }: SlideTienIchProps): JSX.Element {
  const { width, height } = useWindowDimensions();

  const ref = useRef<MotionSlideHandle>(null);

  return (
    <>
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
        <MotionSlide
          ref={ref}
          slidesToShow={1}
          speed={3000}
          animationSpeed={0.6}
          indicatorSxProps={{
            width: "auto",
            pb: 4,
            alignSelf: "center",
          }}
          outerSx={{ display: "flex", flexDirection: "column" }}
          gap={0}
          render={(payload) => (
            //@ts-ignore
            <MotionTypo
              key={payload.actualCurrent}
              transition={{ duration: 0.6 }}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
            >
              {list[payload.actualCurrent].title1}
            </MotionTypo>
          )}
        >
          {list.map((item, index) => (
            <AspectRatio
              key={item.id}
              data-key={item.id}
              data-index={index}
              ratio={`${width}/${height}`}
            >
              <img src={item.image} />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0,0,0,.59)",
                }}
              />
            </AspectRatio>
          ))}
        </MotionSlide>
        <Box
          position={"absolute"}
          sx={{ top: "2rem", left: "2rem", width: "10vw" }}
        >
          <AspectRatio ratio={"209.38/152.38"}>
            <img src={logo} />
          </AspectRatio>
        </Box>
      </Box>
    </>
  );
}
