import styled, { ThemeProvider } from "styled-components";
import { dark } from "../styles/Themes";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  @media (max-width: 48em) {
    
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height:100%;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  @media (max-width: 64em) {
    text-align:center;
    font-size: ${(props) => props.theme.fontxxl};
    width: 40%;
  }
  @media (max-width: 48em) {
    
    font-size: ${(props) => props.theme.fontxl};
    padding:  2rem 0;
    width: 100%;
  }
`;

const BtnContainer = styled.div`
  font-size: ${(props) => props.theme.fontxl};
  z-index: 10;
  width: 35%;
  justify-content: center;
  display: flex;
  @media (max-width: 64em) {

    width: 100%;
  }
  @media (max-width: 48em) {
    
   
    padding:  1rem 2rem;
   
  }
  @media (max-width: 48em) {
    
   
    padding:  0.5rem 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230112/pngtree-cartoon-star-universe-starry-sky-planet-official-account-cover-poster-background-image_1510200.jpg"
          alt="OS"
        />
      </ImgContainer>
      <Title>
        We are ready <br /> for your service
      </Title>
      <BtnContainer>
        <ThemeProvider theme={dark}>
          <Button text="join now" link="#" />
        </ThemeProvider>
      </BtnContainer>
    </Section>
  );
};

export default Banner;
