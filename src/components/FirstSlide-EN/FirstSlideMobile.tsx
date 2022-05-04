import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import { tlwhMob } from "../commons/responsives";
import AspectRatio from "../commons/AspectRatio";
import FirstSlideContent from "./FirstSlideContent";
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
`;

const theme = createTheme({ typography: { fontSize: 10.5 } });

type FirstSlideProps = {};
export default function FirstSlideMobile(props: FirstSlideProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box
          sx={{
            width: "100vw",
            minHeight: "100vh",
            position: "relative",
            display: "grid",
            gridTemplateAreas: '"one" "second"',
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr auto",
            bgcolor: "#b51f28",
          }}
        >
          <StyledAspectRatio
            ratio={"414/896"}
            sx={{
              gridArea: "second",
              marginTop: `-120%`,
            }}
          >
            <Box sx={{ overflow: "hidden", "& >*": { position: "absolute" } }}>
              <Content
                sx={{
                  ...tlwhMob(510.44, -3.5, 405.29, 398.07),
                  zIndex: 1,
                }}
              />
            </Box>
          </StyledAspectRatio>
          <FirstSlideContent
            isMobile={true}
            sx={{
              zIndex: 10000,
              gridArea: "one",
              p: 4,
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
