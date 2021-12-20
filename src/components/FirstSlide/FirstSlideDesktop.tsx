import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import background from "./Background.png";
import Content from "./Content";
import { tlwh } from "../SecondSlide/SecondSlideDesktop";
import AspectRatio from "../commons/AspectRatio";
import RightContentsDesktop from "./RightContentsDesktop";
import { sxFullSizeAbsolute } from "@hungphongbk/vth-sdk/utils/predefinedSx";

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

const theme = createTheme({ typography: { fontSize: 13 } });

type FirstSlideProps = {};
export default function FirstSlideDesktop(props: FirstSlideProps): JSX.Element {
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
          }}
        >
          <Box sx={{ ...sxFullSizeAbsolute }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={background}
            />
          </Box>
          <StyledAspectRatio
            ratio={"1920/928"}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          >
            <Box sx={{ "& >*": { position: "absolute" } }}>
              <Content sx={tlwh(2.08, 3.53, 943.66, 926.87)} />
            </Box>
          </StyledAspectRatio>
          <RightContentsDesktop />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}
