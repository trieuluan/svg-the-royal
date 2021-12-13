import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { Box, styled, SvgIcon } from "@mui/material";
import background from "./Background.png";
import mark from "./mark.png";
import Content from "./Content";

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
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.3);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

type FirstSlideProps = {};
export default function FirstSlideDesktop(props: FirstSlideProps): JSX.Element {
  return (
    <StyledAspectRatio
      ratio={"1920/928"}
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
      <Box>
        <img className={"background"} src={background} />
        <SvgIcon
          viewBox={"0 0 1920 928"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Content />
          <image
            href={mark}
            y={408.61}
            x={448.56}
            width={53.63}
            height={108.28}
          />
        </SvgIcon>
      </Box>
    </StyledAspectRatio>
  );
}
