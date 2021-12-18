import { Box } from "@mui/material";
import background from "./bg-mobile.png";
import { tlwhM } from "./utils";
import ContentDesktop from "./ContentDesktop";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import AspectRatio from "../commons/AspectRatio";

type Slide3MobileProps = {};
export default function Slide3Mobile(props: Slide3MobileProps): JSX.Element {
  return (
    <AspectRatio
      ratio={"414/896"}
      sx={{
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
  );
}
