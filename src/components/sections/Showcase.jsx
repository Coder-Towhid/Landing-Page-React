import { useRef } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};`;

const Row = styled.div`
background-color='lightblue';
white-space: nowrap;
box-sizing:content-box;
margin:2rem 0;
display:flex;

animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h3 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
  }
`;

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ img, service = "", price = 0, passRef }) => {

  let play = ()=>{
    // eslint-disable-next-line react/prop-types
    passRef.current.style.animationPlayState = 'running';
  }
  let pause =  ()=>{
    // eslint-disable-next-line react/prop-types
    passRef.current.style.animationPlayState = 'paused';
  }
  return (
    <ImgContainer onMouseOver={ ()=> pause()} onMouseOut={()=> play()}>
      <img src={img} alt="service" />
      <Details>
        <div>
          <span>Name</span>
          <br />
          <h3>{service}</h3>
        </div>
        <div>
          <span>Code</span>
          <br />
          <h3>{price}</h3>
        </div>
      </Details>
    </ImgContainer>
  );
};
const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <ServiceItem
          img={
            "https://robohash.org/1.png?size=500x500"
          }
          service={"Zogtron"}
          price={999999}
          passRef={Row1Ref}
        />
        <ServiceItem
          img={
            "https://robohash.org/2.png?size=500x500"
          }
          service={"Xylok"}
          price={999999}
          passRef={Row1Ref}
        />
        <ServiceItem
          img={
            "https://robohash.org/3.png?size=500x500"
          }
          service={"Quasarix"}
          price={999999}
          passRef={Row1Ref}
        />
        <ServiceItem
          img={
            "https://robohash.org/4.png?size=500x500"
          }
          service={"Astrotronic"}
          price={999999}
          passRef={Row1Ref}
        />
        <ServiceItem
          img={
            "https://robohash.org/5.png?size=500x500"
          }
          service={"Cyborian"}
          price={999999}
          passRef={Row1Ref}
        />
        <ServiceItem
          img={
            "https://robohash.org/6.png?size=500x500"
          }
          service={"Galaxius"}
          price={999999}
          passRef={Row1Ref}
        />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
      <ServiceItem
          img={
            "https://robohash.org/7.png?size=500x500"
          }
          service={"Technoray"}
          price={999999}
          passRef={Row2Ref}
        />
       <ServiceItem
          img={
            "https://robohash.org/8.png?size=500x500"
          }
          service={"Cosmoblade"}
          price={999999}
          passRef={Row2Ref}
        />
         <ServiceItem
          img={
            "https://robohash.org/9.png?size=500x500"
          }
          service={"Astrobyte"}
          price={999999}
          passRef={Row2Ref}
        />
         <ServiceItem
          img={
            "https://robohash.org/10.png?size=500x500"
          }
          service={"Galactron"}
          price={999999}
          passRef={Row2Ref}
        />
         <ServiceItem
          img={
            "https://robohash.org/11.png?size=500x500"
          }
          service={"Plasmabot"}
          price={999999}
          passRef={Row2Ref}
        />
         <ServiceItem
          img={
            "https://robohash.org/12.png?size=500x500"
          }
          service={"Nebulix"}
          price={999999}
          passRef={Row2Ref}
        />
      </Row>
    </Section>
  );
};

export default Showcase;
