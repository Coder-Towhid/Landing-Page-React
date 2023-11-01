import styled from "styled-components";

// for animation effect
import ConfettiComponent from "../Confetti";

// ********** Section *******
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
// ********** Title *******
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

// ********** Container *******

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

// ********** ImageContainer *******
const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;
// ********** Item *******
const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  z-index: 5;
  backdrop-filter: blur(4px);
  &:hover {
    img {
      transform: translateY(-2rem);
    }
  }
  @media (max-width: 30em) {
    width: 70vw;
  }
`;

// ********** Name *******
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
// ********** Position *******
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9 )`};
  font-weight: 400;
`;

// eslint-disable-next-line react/prop-types
const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};
const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent
          img="https://robohash.org/10.png"
          name="RoboBuddy"
          position="Founder"
        />
        <MemberComponent
          img="https://robohash.org/11.png"
          name="CyberSpark"
          position="Ceo"
        />
        <MemberComponent
          img="https://robohash.org/12.png"
          name="Mechatronix"
          position="Co-Founder"
        />
        <MemberComponent
          img="https://robohash.org/13.png"
          name="TechTitan"
          position="Director"
        />
        <MemberComponent
          img="https://robohash.org/14.png"
          name="GigaBot"
          position="Manager"
        />
        <MemberComponent
          img="https://robohash.org/15.png"
          name="QuantumQuasar"
          position="Artist"
        />
        <MemberComponent
          img="https://robohash.org/16.png"
          name="SteelPulse"
          position="Social Media Manager"
        />
        <MemberComponent
          img="https://robohash.org/17.png"
          name="Voltaroid"
          position="Developer"
        />
        <MemberComponent
          img="https://robohash.org/18.png"
          name="AstroDroid"
          position="Graphic Designer"
        />
      </Container>
    </Section>
  );
};

export default Team;
