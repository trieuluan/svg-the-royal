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
  @keyframes Splash {
    from {
      opacity: 0;
      //transform: scale(0.5);
    }
    50% {
      opacity: 1;
      //transform: scale(1.3);
    }
    to {
      opacity: 1;
      //transform: scale(1);
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
      <Box sx={{ "& >*": { position: "absolute" } }}>
        <img className={"background"} src={background} />
        <ContentMobile sx={tlwhMob(510.44, -3.5, 405.29, 398.07)} />
      </Box>
    </StyledAspectRatio>
  );
}
