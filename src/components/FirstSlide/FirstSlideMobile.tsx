import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { Box, styled } from "@mui/material";
import background from "./BackgroundMobile.png";
import ContentMobile from "./ContentMobile";
import { tlwhMob } from "../commons/responsives";

const StyledAspectRatio = styled(AspectRatio)`
  @keyframes StrokeLine {
    0% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -200;
    }
  }
`;

type FirstSlideProps = {};
export default function FirstSlideMobile(props: FirstSlideProps): JSX.Element {
  return (
    <StyledAspectRatio
      ratio={"414/896"}
      sx={{
        "& img.background": {
          ...sxFullSize,
          top: 0,
          left: 0,
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        },
      }}
    >
      <Box sx={{ overflow: "hidden", "& >*": { position: "absolute" } }}>
        <img className={"background"} src={background} />
        <ContentMobile sx={tlwhMob(510.44, -3.5, 405.29, 398.07)} />
      </Box>
    </StyledAspectRatio>
  );
}
