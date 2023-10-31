import styled, { ThemeProvider } from "styled-components"
import { dark } from "../styles/Themes";
import Button from './Button'

const Section = styled.section`
width:100vw;
height:25rem;
position: relative;
border-top: 2px solid ${props=>props.theme.text};
background-color: ${props=> `rgba(${props.theme.textRgba}, 0.9)`};
display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`

const ImgContainer = styled.div`
width:100%;
opacity: 0.2;
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);



img{
    width:100%;
    height:auto;
}
`
const Title = styled.h2`
font-size:${props=> props.theme.fontxxxl};
color: ${props=> props.theme.body};
padding: 1rem 2rem;
z-index:10;
width:35%`

const BtnContainer = styled.div`
font-size:${props=> props.theme.fontxl};
z-index:10;
width:35%;
justify-content: center;
display:flex;
`
const Banner = () => {
  return (
    <Section>
     <ImgContainer>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230112/pngtree-cartoon-star-universe-starry-sky-planet-official-account-cover-poster-background-image_1510200.jpg" alt="OS"/>
     </ImgContainer>
     <Title>We are ready <br/> for your service</Title>
     <BtnContainer>
     <ThemeProvider theme={dark}>
     <Button text="join now" link="#"/>
            </ThemeProvider>
    
     </BtnContainer>
    
    </Section>
  )
}

export default Banner