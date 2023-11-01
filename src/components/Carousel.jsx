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

// ****** container ***********
const Container = styled.div`
  width: 25vw;
  height: 75vh;
  @media (max-width: 70em) {
    height: 60vh;
  }
  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
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
    img {
      display: block;
      height: auto;
      width: 100%;
      object-fit: cover;
    }
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
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
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
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
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
        {Array(10)
          .fill("a")
          .map((item, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <img
                src={`https://robohash.org/slide-${index}.png?size=300x300`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
