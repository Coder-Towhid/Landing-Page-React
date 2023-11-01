import styled, { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import Button from "../Button";
import Carousel from "../Carousel";

// ******* section *********
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// ******* Container *********
const Container = styled.div`
  width: 75%;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

// ******* Box *********

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

// ******* Title *********
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

// ******* SubText *********
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  width: 80%;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

// ******* SubTextLight *********
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  width: 80%;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

// ******* ButtonContainer *********
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;
  @media (max-width: 64em) {
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome to the Land of ROBOTS</Title>
          <SubText>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy
          </SubText>
          <SubTextLight>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin
          </SubTextLight>
          <ButtonContainer>
            {/* using dark theme for the button */}
            <ThemeProvider theme={dark}>
              <Button text="SUBSCRIBE" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
