import Header from "./components/Header"
import HomeSection from "./components/HomeSection"
import AuxHomeSection from "./components/AuxHomeSection"
import IntroServiceSection from "./components/IntroServiceSection"

function App() {

  return (
    <div className="block m-auto shadow-2xl" style={{maxWidth: '2500px'}}> 
      <Header/> 
      <HomeSection/>
      <AuxHomeSection/>
      <IntroServiceSection/>
    </div>
  )
}

export default App
