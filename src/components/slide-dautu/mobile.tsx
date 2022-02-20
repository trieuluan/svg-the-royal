import { HoanMySlidesData } from "../assets/hoanmy";
import useWindowDimensions from "../commons/responsives";
import { Box, styled, Typography } from "@mui/material";
import AspectRatio from "../commons/AspectRatio";
import bg from "./bg-desktop.webp";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

SwiperCore.use([Pagination, Autoplay]);
type DesktopProps = {
  slidesData: HoanMySlidesData;
};

const Bg = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;
const BgBox = styled(Box)`
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.46);
    display: block;
    content: "";
  }
`;

const StyledText = styled(Typography)`
  color: #a01f26;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  font-family: Montserrat;
  display: inline-block;
  will-change: transform;
  transition: transform 0.6s ease;
  transform: scale(1);
  transform-origin: top center;
  margin-top: 20px;
  .center & {
    transform: translateY(-0.5rem) scale(0.75);
  }
  @media screen and (max-width: 1366px) {
    font-size: 14px;
  }
`;

const StyledImage = styled(Box)<{ ratio?: string | number }>`
  @supports (aspect-ratio: 1/1) {
    aspect-ratio: calc(${(props: any) => props.ratio});
  }
  width: 100%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const StyleContent = styled(Box)`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  height: 100vh;
  @media screen and (max-width: 425px) {
    display: block;
    height: auto;
  }
  > .swiper {
    aspect-ratio: calc(4 / 1);
    margin: 0 50px;
    @media screen and (max-width: 1366px) {
      aspect-ratio: unset;
      margin: 0;
    }
    @media screen and (max-width: 425px) {
      margin: 0 20px;
      padding: 40px 0;
    }
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 200ms linear;
      transform: scale(0.8);
      &.swiper-slide-active {
        transform: scale(1);
        .item-slide p {
          font-weight: bold;
        }
      }
      .item-slide {
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
    > .swiper-pagination {
      display: flex;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 2rem;
      justify-content: center;
      .swiper-pagination-bullet {
        background-color: transparent;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        height: 0.7rem;
        width: 0.7rem;
        border-radius: 50%;
        border: 1px solid #333;
        &.swiper-pagination-bullet-active {
          cursor: pointer;
          height: 0.7rem;
          width: 0.7rem;
          border-radius: 50%;
          border: 1px solid #333;
          border-color: #a01f26;
          background-color: #a01f26;
          outline: 1px solid #a01f26;
          outline-offset: 0.45rem;
        }
      }
    }
  }
`;

const TitleText = styled(Typography)`
  text-transform: uppercase;
  font-family: Megante;
  font-size: 48px;
  position: relative;
  background: -webkit-linear-gradient(
    248deg,
    #effac2 30%,
    #d1a32c 40%,
    #effac2 50%,
    #d1a32c 65%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
  @media screen and (max-width: 1366px) {
    margin: 50px 0 0 0;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
    margin: 70px 0 30px 0;
  }
`;

const SpecialText = styled(Typography)`
  font-family: Rosellinda;
  font-size: 78px;
  text-transform: initial;
  display: inline-block;
  @media screen and (max-width: 425px) {
    font-size: 48px;
  }
`;

export default function Desktop(props: DesktopProps): JSX.Element {
  const paginationRef = React.useRef(null);
  const { width, height } = useWindowDimensions();
  console.log(width, height);
  return (
    <Box>
      <BgBox
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <AspectRatio ratio={`${width}/${(height * 2) / 3.5}`}>
          <Bg src={bg} />
        </AspectRatio>
      </BgBox>
      <SRLWrapper>
        <StyleContent>
          <TitleText>
            Đầu tư <SpecialText component={"span"}>Hoàn Mỹ</SpecialText>
            <br />
            Giá trị vượt trội
          </TitleText>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {props.slidesData.slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="item-slide">
                  <a href={slide.params.bg.image}>
                    <StyledImage ratio={4 / 3}>
                      <img src={slide.params.bg.image} />
                    </StyledImage>
                  </a>
                  <StyledText>{slide.layers[0].text}</StyledText>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyleContent>
      </SRLWrapper>
    </Box>
  );
}
