import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import background from "./Background.png";
import Content from "./Content";
import { tlwh } from "../SecondSlide/SecondSlideDesktop";
import AspectRatio from "../commons/AspectRatio";
import FirstSlideContent from "./FirstSlideContent";
import { sxFullSizeAbsolute } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { useMemo } from "react";

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
export default function FirstSlideDesktop(props: FirstSlideProps): JSX.Element {
  const matches = useMediaQuery("(max-height:768px)");
  const theme = useMemo(
    () => createTheme({ typography: { fontSize: matches ? 11 : 13 } }),
    [matches]
  );
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
              <Content sx={tlwh(2.08, 3.53, 1003.49, 926.87)} />
            </Box>
          </StyledAspectRatio>
          <FirstSlideContent
            isMobile={false}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              left: "50vw",
              p: "4rem",
              pl: "2.5rem",
              "& .MuiTypography-root": {
                color: "white",
                fontFamily: "Montserrat",
              },
            }}
          />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}
