
import styled from "styled-components";
import ConfettiComponent from "../Confetti";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
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
`;

const Container = styled.div`
width:75%;
margin:2rem  auto;

display: flex;
justify-content: space-between;
align-items:center;
flex-wrap:wrap;
`
const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;
  padding:1rem;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Item = styled.div`
width:calc(20rem - 4vw);
padding:1rem 0;
color: ${props=> props.theme.body};
margin: 2rem 1rem;
position: relative;
border: 2px solid ${props=> props.theme.text};
border-radius: 20px;
z-index:5;
backdrop-filter: blur(4px);
&:hover{
  img{
    transform: translateY(-2rem);
  }
}

`

const Name = styled.h2`
font-size: ${props=> props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform:uppercase;
color: ${props=> props.theme.text};
margin-top:1rem;`

const Position = styled.h2`
font-size: ${props=> props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform:capitalize;
color: ${props=> `rgba(${props.theme.textRgba},0.9 )`};
font-weight:400;
`


// eslint-disable-next-line react/prop-types
const MemberComponent = ({img, name=" ", position=" "})=>{
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}
const Team = () => {
  return (
    <Section>
    <ConfettiComponent/>
      <Title>
Team
      </Title>
      <Container>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David a" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David a" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David a" position="founder"/>
      <MemberComponent img={'https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png'} name="David a" position="founder"/>
      </Container>
    </Section>
  )
}

export default Team