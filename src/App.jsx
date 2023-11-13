import SectionOne from "./components/Section1/SectionOne"
import SectionTwo from "./components/Section2/SectionTwo"
import SectionThree from "./components/Section3/SectionThree"
import SectionFour from "./components/Section4/SectionFour"
import SectionFive from "./components/Section5/SectionFive"
import SectionSix from "./components/Section6/SectionSix"
import SectionSeven from "./components/Section7/SectionSeven"
import Footer from "./components/Footer/Footer"
import LateralMenu from "./components/LateralMenu/LateralMenu"
import Header from "./components/header/header"
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <>
      <LateralMenu/>
      <Header/>
      <Nav/>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </main>
      <Footer/>
    </>
  )
}

export default App
