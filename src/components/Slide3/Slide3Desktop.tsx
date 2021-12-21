import { Box, Stack, styled } from "@mui/material";
import background from "./bg.png";
import ContentDesktop from "./ContentDesktop";
import { tlwhD } from "./utils";
import AspectRatio from "../commons/AspectRatio";
import text1desktop from "./text1-desktop.png";
import text2desktop from "./text-2-desktop.png";
import text3desktop from "./text-3-desktop.png";
import { m } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0,
      duration: 1,
      staggerChildren: 1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: "100%", transition: { duration: 0.5 } },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;
const MotionStack = m(Stack);

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

type Slide3DesktopProps = {};
export default function Slide3Desktop(props: Slide3DesktopProps): JSX.Element {
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
          ratio={"1920/951"}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Box sx={{ overflow: "hidden", "& >*": { position: "absolute" } }}>
            <ContentDesktop sx={tlwhD(264.72, -13.94, 946.74, 688.85)} />
            <MotionStack
              gap={2}
              alignItems={"center"}
              sx={{
                top: "50%",
                left: "50%",
                right: 0,
                transform: "translateY(-45%)",
                pr: "10%",
                pl: "5%",
                "& .MuiBox-root": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                  pt: 1,
                },
              }}
              variants={container}
              initial={"hidden"}
              animate={"show"}
            >
              <Box>
                <m.img
                  src={text1desktop}
                  style={{ width: "100%" }}
                  variants={item}
                />
              </Box>
              <Box>
                <m.img
                  src={text2desktop}
                  style={{ width: "45%" }}
                  variants={item}
                />
              </Box>
              <Box>
                <m.img
                  src={text3desktop}
                  style={{ width: "25%" }}
                  variants={item}
                />
              </Box>
            </MotionStack>
          </Box>
        </AspectRatio>
      </Box>
    </Box>
  );
}
