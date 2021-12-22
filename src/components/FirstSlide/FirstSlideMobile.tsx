import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import background from "./BackgroundMobile.png";
import ContentMobile from "./ContentMobile";
import { tlwhMob } from "../commons/responsives";
import AspectRatio from "../commons/AspectRatio";
import RightContentsDesktop from "./RightContentsDesktop";

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

const theme = createTheme({ typography: { fontSize: 9 } });

type FirstSlideProps = {};
export default function FirstSlideMobile(props: FirstSlideProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            overflow: "hidden",
            bgcolor: "#b51f28",
          }}
        >
          <Box sx={{ ...sxFullSize, position: "relative" }}>
            <StyledAspectRatio
              ratio={"414/896"}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                "& img.background": {
                  ...sxFullSize,
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                  position: "absolute",
                },
              }}
            >
              <Box
                sx={{ overflow: "hidden", "& >*": { position: "absolute" } }}
              >
                <img className={"background"} src={background} />
                <ContentMobile
                  sx={{
                    ...tlwhMob(510.44, -3.5, 405.29, 398.07),
                    zIndex: 1,
                  }}
                />
              </Box>
            </StyledAspectRatio>
            <RightContentsDesktop
              isMobile={true}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                p: 4,
                "& .MuiTypography-root": {
                  color: "white",
                  fontFamily: "Montserrat",
                },
              }}
            />
          </Box>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}
