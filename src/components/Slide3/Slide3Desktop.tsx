import { Box, Stack } from "@mui/material";
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
      delayChildren: 1.5,
      duration: 1,
      staggerChildren: 1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
} as const;
const MotionStack = m(Stack);

type Slide3DesktopProps = {};
export default function Slide3Desktop(props: Slide3DesktopProps): JSX.Element {
  return (
    <AspectRatio
      ratio={"1920/951"}
      sx={{
        "& img.background": {
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        },
      }}
    >
      <Box sx={{ overflow: "hidden", "& >*": { position: "absolute" } }}>
        <img
          className={"background"}
          src={background}
          style={tlwhD(-217, -1.88, 1921.88, 1170.04)}
        />
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
          }}
          variants={container}
          initial={"hidden"}
          animate={"show"}
        >
          <m.img src={text1desktop} style={{ width: "100%" }} variants={item} />
          <m.img src={text2desktop} style={{ width: "45%" }} variants={item} />
          <m.img src={text3desktop} style={{ width: "25%" }} variants={item} />
        </MotionStack>
      </Box>
    </AspectRatio>
  );
}
