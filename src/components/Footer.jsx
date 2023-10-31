import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;

const Footer = () => {
  return (
   <Section>Footer</Section>
  )
}

export default Footer