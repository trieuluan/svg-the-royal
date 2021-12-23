import { Box, Stack } from "@mui/material";
import background from "./bg-mobile.png";
import { tlwhM } from "./utils";
import ContentDesktop from "./ContentDesktop";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import AspectRatio from "../commons/AspectRatio";
import { m } from "framer-motion";
import text1desktop from "./text-1-mobile.png";
import text2desktop from "./text-2-mobile.png";

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

type Slide3MobileProps = {};
export default function Slide3Mobile(props: Slide3MobileProps): JSX.Element {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr auto",
      }}
    >
      <MotionStack
        gap={2}
        alignItems={"center"}
        sx={{
          py: "10%",
          px: "5%",
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
          <m.img src={text1desktop} style={{ width: "100%" }} variants={item} />
        </Box>
        <Box>
          <m.img src={text2desktop} style={{ width: "45%" }} variants={item} />
        </Box>
      </MotionStack>
      <AspectRatio
        ratio={"414/896"}
        sx={{
          marginTop: `-73.714286%`,
          "& img.background": {
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
            ...sxFullSize,
          },
        }}
      >
        <Box sx={{ overflow: "hidden", "& >*": { position: "absolute" } }}>
          <img className={"background"} src={background} />
          <ContentDesktop sx={tlwhM(575, -7.94, 434.51, 321.65)} />
        </Box>
      </AspectRatio>
    </Box>
  );
}
