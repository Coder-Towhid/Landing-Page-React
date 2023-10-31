import styled from "styled-components";
import TypeWriterText from "../TypeWriterText";
import { useEffect, useState } from "react";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HERO_IMG = [
  "https://robohash.org/1.png?size=500x500",
  "https://robohash.org/2.png?size=500x500",
  "https://robohash.org/3.png?size=500x500",
  "https://robohash.org/4.png?size=500x500",
];

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(0);

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
          <img src={HERO_IMG[selectedImg]} alt="" />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
