import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { Box, styled, SvgIcon } from "@mui/material";
import background from "./BackgroundMobile.png";
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
      <Box>
        <img className={"background"} src={background} />
        <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <AspectRatio ratio={"414/384"}>
            <Box>
              <SvgIcon
                viewBox={"0 0 928 928"}
                sx={{
                  width: "100%",
                  height: "auto",
                  mt: `1.2%`,
                  ml: "-4.3%",
                  marginTop: "-2.4%",
                  marginLeft: "-3.8%",
                  transform: "scale(.956)",
                  transformOrigin: "center",
                }}
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
          </AspectRatio>
        </Box>
      </Box>
    </StyledAspectRatio>
  );
}
