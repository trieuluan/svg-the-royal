import { styled, Typography } from "@mui/material";
import "./fonts.css";

const GoldTypography = styled(Typography)`
  background: linear-gradient(
    to right,
    #d3af76 0%,
    #a98843 19.65%,
    #eae58b 43.1%,
    #ba9845 64.84%,
    #9a7d2d 81.6%,
    #bd9d53 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.75));
`;

export default GoldTypography;
