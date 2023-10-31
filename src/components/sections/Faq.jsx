import styled from "styled-components";
import Accordion from "../Accordion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
 
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`;

const Container = styled.div`
width:75%;
margin:2rem auto;

display:flex;
justify-content:space-between;
align-items:center;
`

const Box = styled.div`
  width:45%;`


const Faq = () => {
  
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

useLayoutEffect(() => {
  let element = ref.current;
  ScrollTrigger.create({
    trigger: element,
    start:'top top',
    end:'bottom top',
    pin:true,
    pinSpacing: false,
    scrub:true,
   
  })

  return () => {
   ScrollTrigger.killAll();
  };
}, )



  return (
   <Section ref={ref}>
    <Title>Faq</Title>
    <Container>
      <Box>
        <Accordion title="Where can I get the best service">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        </Accordion>
        <Accordion title="Where can I get the best service">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        </Accordion>
        <Accordion title="Where can I get the best service">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        </Accordion>
       
      </Box>
      <Box>
      <Accordion title="Where can I get the best service">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        </Accordion>
        <Accordion title="Where can I get the best service">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        </Accordion>
        <Accordion title="Where can I get the best service">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        </Accordion>
      </Box>
    </Container>
   </Section>
  )
}

export default Faq