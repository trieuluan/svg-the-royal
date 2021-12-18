import { sxFullSize } from "@hungphongbk/vth-sdk/utils/predefinedSx";
import { Box, styled } from "@mui/material";
import background from "./Background.png";
import Content from "./Content";
import { tlwh } from "../SecondSlideDesktop";
import AspectRatio from "../commons/AspectRatio";

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
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <StyledAspectRatio
        ratio={"1920/928"}
        sx={{
          height: "100%",
          width: "auto",
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
          <Content sx={tlwh(2.08, 3.53, 943.66, 926.87)} />
        </Box>
      </StyledAspectRatio>
    </Box>
  );
}
