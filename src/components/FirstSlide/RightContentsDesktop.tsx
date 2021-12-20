import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import banner from "./banner.png";
import Collapsable from "./Collapsable";
import PlusIcon from "./PlusIcon";

type RightContentsDesktopProps = {};
export default function RightContentsDesktop(
  props: RightContentsDesktopProps
): JSX.Element {
  const [current, setCurrent] = useState("");
  return (
    <Box
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
    >
      <Stack gap={2}>
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
            <PlusIcon />
            <Typography>
              <strong>TÂM ĐIỂM NGOẠI GIAO</strong>
              <br />
              1. Trung tâm hành chính Đà Nẵng
              <br />
              2. Sân bay quốc tế Đà Nẵng
              <br />
              3. Cung thể thao quốc tế Tiên Sơn
              <br />
              4. Trung tâm hội nghị quốc tế Ariyana Đà Nẵng
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "2"}
            onToggle={() => setCurrent(current !== "2" ? "2" : "")}
          >
            <PlusIcon />
            <Typography>
              <strong>HỘI TỤ CÁC THƯƠNG HIỆU QUỐC TẾ</strong>
              <br />
              Hilton Da Nang
              <br />
              Pullman Danang Beach Resort
              <br />
              Four Points by Sheraton Danang
              <br />
              Novotel Danang Premier Han River
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "3"}
            onToggle={() => setCurrent(current !== "3" ? "3" : "")}
          >
            <PlusIcon />
            <Typography>
              <strong>HỆ THỐNG Y TẾ GIÁO DỤC QUỐC TẾ</strong>
              <br />
              Trường Quốc tế Hoa Kỳ APU
              <br />
              Trường Quốc tế song ngữ Đà Nẵng
              <br />
              Trường Quốc tế St.Nicholas
              <br />
              Trường Mầm non Việt Nhật
              <br />
              Bệnh viện Đa khoa Quốc tế Vinmec
              <br />
              Bệnh viện Hoàn Mỹ Đà Nẵng
            </Typography>
          </Collapsable>
          <Collapsable
            open={current === "4"}
            onToggle={() => setCurrent(current !== "4" ? "4" : "")}
          >
            <PlusIcon />
            <Typography>
              <strong>TRUNG TÂM THƯƠNG MẠI GIẢI TRÍ - NGHỆ THUẬT</strong>
              <br />
              Quảng trường trung tâm Đà Nẵng
              <br />
              Trung tâm thương mại Vincom Đà Nẵng
              <br />
              Trung tâm thương mại Indochina Riverside
              <br />
              Chợ Hàn
              <br />
              Nhà hát Trưng Vương
              <br />
              Bảo tàng Đà Nẵng
              <br />
              Bảo tàng Mỹ thuật Đà Nẵng
              <br />
              Bảo tàng điêu khắc Chăm Đà Nẵng
            </Typography>
          </Collapsable>
        </Box>
      </Stack>
    </Box>
  );
}
