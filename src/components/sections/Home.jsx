import styled from "styled-components";
import TypeWriterText from "../TypeWriterText";
import { useEffect, useState } from "react";

// *** section ******
const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

// *** Container ******
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

// *** Box ******
const Box = styled.div`
  width: 50%;
  height: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// *** HeroImg ******
const HeroImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 64em) {
    min-width: 40vw;
  }
`;

// Image array variable stroring images to view on hero section
const HERO_IMG = [
  "https://robohash.org/1.png?size=500x500",
  "https://robohash.org/2.png?size=500x500",
  "https://robohash.org/3.png?size=500x500",
  "https://robohash.org/4.png?size=500x500",
];

const Home = () => {
  // For setting the images one by one
  const [selectedImg, setSelectedImg] = useState(0);

  // using on a setInterval a gap of 1000ms
  useEffect(() => {
    const intervalId = setInterval(() => {
      const id = (selectedImg + 1) % HERO_IMG.length;
      setSelectedImg(id);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [selectedImg]);

  return (
    <Section id="home">
      <Container>
        <Box>
          {" "}
          <TypeWriterText />
        </Box>
        <Box>
          <HeroImg>
            <img src={HERO_IMG[selectedImg]} alt="" />
          </HeroImg>
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
