import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
// icons for social media
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

// ****** Section ******
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

`;
// ****** Container ******
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
      text-align: center;
    }
  }
`;

// ****** Left ******

const Left = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-itemsL center;
@media (max-width: 48em) {
    width:100%;
  }
`;

// ****** IconList ******
const IconList = styled.div`
display: flex;
align-items; center;
margin: 1rem auto;

&>*{
  padding-right:0.5rem;
transition: all 0.2s ease;

&:hover{
  transform: scale(1.2);
}
}

`;

// ****** MenuItems ******
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;
// ****** Item ******
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
// ****** Bottom ******
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />

          <IconList>
            <FaFacebook />
            <FaInstagramSquare />
            <FaLinkedin />
          </IconList>
        </Left>

        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Roadmap</Item>
          <Item>Showcase</Item>
          <Item>Team</Item>
          <Item>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Coder Towhid. All rights reserved.
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
