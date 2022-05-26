import { useState } from "react";
import { Box, Stack, styled, SxProps, Typography } from "@mui/material";
import Collapsable from "./Collapsable";
import XemThemIcon from "./XemThemIcon";
import ArrowGoldIcon from "./ArrowGoldIcon";
import "../commons/fonts.css";
import GoldTypography from "../commons/GoldTypography";

const GoldSecondTypography = styled(GoldTypography)`
  font-size: 2.8em;
  font-family: Megante, serif !important;
  margin-top: -0.5em;
  @media screen and (max-width: 425px) {
    font-size: 26px;
  }
`;

type RightContentsDesktopProps = { sx: SxProps; isMobile: boolean };
export default function FirstSlideContent(
  props: RightContentsDesktopProps
): JSX.Element {
  const [current, setCurrent] = useState("1");
  return (
    <Box sx={props.sx}>
      <Stack gap={".7em"}>
        <Box>
          <GoldTypography
            sx={{
              fontFamily: "Rosellinda !important",
              fontSize: "6em",
              pl: ".1em",
            }}
          >
            Golden location on the
          </GoldTypography>
          <GoldSecondTypography>ICONIC BOULEVARD</GoldSecondTypography>
        </Box>
        <Typography>
        The Royal Boutique & Condo Danang's location owns "3 good" of the ancient conception both from East to West, including near by hustle & bustle commercial centers and the Han river which  located on 3 major traffic axes of the city such as Binh Minh 5, Bach Dang, Tran Van Tru; it is both convenient for moving and connecting multi-dimensional utility space.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "25px 1fr",
            gridGap: 10,
            "& strong": {
              cursor: "pointer",
            },
          }}
        >
          <Collapsable
            open={current === "1"}
            onToggle={() => setCurrent(current !== "1" ? "1" : "")}
          >
            <Typography>
              <strong onClick={() => setCurrent(current !== "1" ? "1" : "")}>
              DIPLOMATIC PREMIER POINT
              </strong>
              <br />
              <ArrowGoldIcon /> Da Nang Administrative Center
              <br />
              <ArrowGoldIcon /> Da Nang International Airport
              <br />
              <ArrowGoldIcon /> Tien Son Sport Center
              <br />
              <ArrowGoldIcon /> Ariyana Danang International Convention Center
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "2"}
            onToggle={() => setCurrent(current !== "2" ? "2" : "")}
          >
            <Typography>
              <strong onClick={() => setCurrent(current !== "2" ? "2" : "")}>
                CONVERGENCE POINT OF INTERNATIONAL BRANDS 
              </strong>
              <br />
              <ArrowGoldIcon /> Hilton Da Nang
              <br />
              <ArrowGoldIcon /> Pullman Danang Beach Resort
              <br />
              <ArrowGoldIcon /> Four Points by Sheraton Danang
              <br />
              <ArrowGoldIcon /> Novotel Danang Premier Han River
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "3"}
            onToggle={() => setCurrent(current !== "3" ? "3" : "")}
          >
            <Typography>
              <strong onClick={() => setCurrent(current !== "3" ? "3" : "")}>
              	INTERNATIONAL EDUCATION AND HEALTH SYSTEM 
              </strong>
              <br />
              <ArrowGoldIcon /> APU International School Da Nang
              <br />
              <ArrowGoldIcon /> Da Nang Bilingual International School
              <br />
              <ArrowGoldIcon /> St. Nicholas International School
              <br />
              <ArrowGoldIcon /> Vietnam Japanese Kindergarten 
              <br />
              <ArrowGoldIcon /> Vinmec International General Hospital
              <br />
              <ArrowGoldIcon /> Hoan My Da Nang Hospital
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "4"}
            onToggle={() => setCurrent(current !== "4" ? "4" : "")}
          >
            <Typography>
              <strong onClick={() => setCurrent(current !== "4" ? "4" : "")}>
              	COMMERCIAL, ENTERTAINMENT - ART CENTERS 
              </strong>
              <br />
              <ArrowGoldIcon /> Danang Central Square
              <br />
              <ArrowGoldIcon /> Vincom Plaza Da Nang
              <br />
              <ArrowGoldIcon /> Indochina Riverside Mall
              <br />
              <ArrowGoldIcon /> Han Market
              <br />
              <ArrowGoldIcon /> Trung Vuong Theater
              <br />
              <ArrowGoldIcon /> Danang Museum
              <br />
              <ArrowGoldIcon /> Danang Fine Arts Museum
              <br />
              <ArrowGoldIcon /> Da Nang Museum of Cham Sculpture
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "5"}
            onToggle={() => setCurrent(current !== "5" ? "5" : "")}
          >
            <Typography>
              <strong onClick={() => setCurrent(current !== "5" ? "5" : "")}>
              ICONIC WORKS CENTER
              </strong>
              <br />
              <ArrowGoldIcon />
              Dragon Bridge 
              <br />
              <ArrowGoldIcon />
              Tran Thi Ly Bridge 
              <br />
              <ArrowGoldIcon />
              Han River Bridge
              <br />
              <ArrowGoldIcon />
              The Dragon Carp statue 
              <br />
              <ArrowGoldIcon />
              Sun Wheel - Asia Park
            </Typography>
          </Collapsable>
        </Box>
        <XemThemIcon />
      </Stack>
    </Box>
  );
}
