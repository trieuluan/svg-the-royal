import { AspectRatio } from "@hungphongbk/vth-sdk";
import { Box } from "@mui/material";
import background from "./bg.png";
import ContentDesktop from "./ContentDesktop";
import { tlwhD } from "./utils";

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
      </Box>
    </AspectRatio>
  );
}
