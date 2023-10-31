import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Arrow from "../assets/Arrow.svg";

// import required modules
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

const Container = styled.div`
  width: 25vw;
  height: 75vh;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          type: "fraction",
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={{
          enabled: true,
        }}
        scrollbar={{
          draggable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        {Array(10).fill('a').map((item, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <img src={`https://robohash.org/slide-${index}.png?size=500x500`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
