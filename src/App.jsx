import { ThemeProvider } from "styled-components"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import About from "./components/sections/About"
import Faq from "./components/sections/Faq"
import Home from "./components/sections/Home"
import Showcase from "./components/sections/Showcase"
import Team from "./components/sections/Team"
import GlobalStyles from "./styles/GlobalStyles"
import { light } from "./styles/Themes"
import Roadmap from "./components/sections/Roadmap"

function App() {


  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={light} >
    <Navigation/> 
    <Home/>
    <About/>
    <Roadmap/>
    <Showcase/>
    <Team/>
    <Faq/>
    <Footer/>
    </ThemeProvider>
   
    </>
  )
}

export default App
