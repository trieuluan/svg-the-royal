import { useState } from "react";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import banner from "./banner.png";
import Collapsable from "./Collapsable";
import XemThemIcon from "./XemThemIcon";
import ArrowGoldIcon from "./ArrowGoldIcon";

type RightContentsDesktopProps = { sx: SxProps; isMobile: boolean };
export default function RightContentsDesktop(
  props: RightContentsDesktopProps
): JSX.Element {
  const [current, setCurrent] = useState("");
  return (
    <Box sx={props.sx}>
      <Stack gap={".7em"}>
        <img
          src={banner}
          style={{
            width: "100%",
            maxHeight: "15vh",
            objectFit: "contain",
            objectPosition: "left",
          }}
        />
        <Typography>
          The Royal Đà Nẵng sở hữu vị trí "3 tốt" trong quan niệm xưa nay của cả
          Đông - Tây, bao gồm gần các trung tâm thương mại sầm uất, gần sông và
          nằm trên 3 trục giao thông lớn của thành phố là Bình Minh 5, Bạch
          Đằng, Nguyễn Công Trứ; vừa giúp thuận tiện cho việc di chuyển, vừa kết
          nối không gian tiện ích đa chiều.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "25px 1fr",
            gridGap: 10,
          }}
        >
          <Collapsable
            open={current === "1"}
            onToggle={() => setCurrent(current !== "1" ? "1" : "")}
          >
            <Typography>
              <strong>TÂM ĐIỂM NGOẠI GIAO</strong>
              <br />
              <ArrowGoldIcon /> Trung tâm hành chính Đà Nẵng
              <br />
              <ArrowGoldIcon /> Sân bay quốc tế Đà Nẵng
              <br />
              <ArrowGoldIcon /> Cung thể thao quốc tế Tiên Sơn
              <br />
              <ArrowGoldIcon /> Trung tâm hội nghị quốc tế Ariyana Đà Nẵng
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "2"}
            onToggle={() => setCurrent(current !== "2" ? "2" : "")}
          >
            <Typography>
              <strong>HỘI TỤ CÁC THƯƠNG HIỆU QUỐC TẾ</strong>
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
              <strong>HỆ THỐNG Y TẾ GIÁO DỤC QUỐC TẾ</strong>
              <br />
              <ArrowGoldIcon /> Trường Quốc tế Hoa Kỳ APU
              <br />
              <ArrowGoldIcon /> Trường Quốc tế song ngữ Đà Nẵng
              <br />
              <ArrowGoldIcon /> Trường Quốc tế St.Nicholas
              <br />
              <ArrowGoldIcon /> Trường Mầm non Việt Nhật
              <br />
              <ArrowGoldIcon /> Bệnh viện Đa khoa Quốc tế Vinmec
              <br />
              <ArrowGoldIcon /> Bệnh viện Hoàn Mỹ Đà Nẵng
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "4"}
            onToggle={() => setCurrent(current !== "4" ? "4" : "")}
          >
            <Typography>
              <strong>TRUNG TÂM THƯƠNG MẠI GIẢI TRÍ - NGHỆ THUẬT</strong>
              <br />
              <ArrowGoldIcon /> Quảng trường trung tâm Đà Nẵng
              <br />
              <ArrowGoldIcon /> Trung tâm thương mại Vincom Đà Nẵng
              <br />
              <ArrowGoldIcon /> Trung tâm thương mại Indochina Riverside
              <br />
              <ArrowGoldIcon /> Chợ Hàn
              <br />
              <ArrowGoldIcon /> Nhà hát Trưng Vương
              <br />
              <ArrowGoldIcon /> Bảo tàng Đà Nẵng
              <br />
              <ArrowGoldIcon /> Bảo tàng Mỹ thuật Đà Nẵng
              <br />
              <ArrowGoldIcon /> Bảo tàng điêu khắc Chăm Đà Nẵng
            </Typography>
          </Collapsable>
        </Box>
        <XemThemIcon
          sx={{
            height: "2.5em",
            width: "auto",
            mr: "auto",
            mt: props.isMobile ? ".5em" : "1.5em",
          }}
        />
      </Stack>
    </Box>
  );
}
