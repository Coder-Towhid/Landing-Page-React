import { useRef } from "react";
import styled, { keyframes } from "styled-components";

// ********** SECTION *************

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

// ********** MOVING THE CARDS  *************

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};`;

// ********** MOVING THE CARDS LEFT TO RIGHT/ RIGHT TO LEFT *************
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

// ********** ImgContainer *************
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

// ********** Details *************

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h3 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

// eslint-disable-next-line react/prop-types
const ShowcaseItem = ({ img, name = "", code = 0, passRef }) => {
  let play = () => {
    // eslint-disable-next-line react/prop-types
    passRef.current.style.animationPlayState = "running";
  };
  let pause = () => {
    // eslint-disable-next-line react/prop-types
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <ImgContainer onMouseOver={() => pause()} onMouseOut={() => play()}>
      <img src={img} alt="img" />
      <Details>
        <div>
          <span>Name</span>
          <br />
          <h3>{name}</h3>
        </div>
        <div>
          <span>Code</span>
          <br />
          <h3>{code}</h3>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <ShowcaseItem
          img={"https://robohash.org/1.png?size=500x500"}
          name={"Zogtron"}
          code={999999}
          passRef={Row1Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/2.png?size=500x500"}
          name={"Xylok"}
          code={999999}
          passRef={Row1Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/3.png?size=500x500"}
          name={"Quasarix"}
          code={999999}
          passRef={Row1Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/4.png?size=500x500"}
          name={"Astrotronic"}
          code={999999}
          passRef={Row1Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/5.png?size=500x500"}
          name={"Cyborian"}
          code={999999}
          passRef={Row1Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/6.png?size=500x500"}
          name={"Galaxius"}
          code={999999}
          passRef={Row1Ref}
        />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <ShowcaseItem
          img={"https://robohash.org/7.png?size=500x500"}
          name={"Technoray"}
          code={999999}
          passRef={Row2Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/8.png?size=500x500"}
          name={"Cosmoblade"}
          code={999999}
          passRef={Row2Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/9.png?size=500x500"}
          name={"Astrobyte"}
          code={999999}
          passRef={Row2Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/10.png?size=500x500"}
          name={"Galactron"}
          code={999999}
          passRef={Row2Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/11.png?size=500x500"}
          name={"Plasmabot"}
          code={999999}
          passRef={Row2Ref}
        />
        <ShowcaseItem
          img={"https://robohash.org/12.png?size=500x500"}
          name={"Nebulix"}
          code={999999}
          passRef={Row2Ref}
        />
      </Row>
    </Section>
  );
};

export default Showcase;
