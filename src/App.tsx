import Header from "./components/Header"
import HomeSection from "./components/HomeSection"
import AuxHomeSection from "./components/AuxHomeSection"
import IntroServiceSection from "./components/IntroServiceSection"
import MarketingServiceSection from "./components/MarketingServiceSection"
import EmailServiceSection from "./components/EmailServiceSection"
import WorkSection from "./components/WorkSection"

function App() {

  return (
    <div className="block m-auto shadow-2xl overflow-x-hidden" style={{maxWidth: '2500px'}}> 
      <Header/> 
      <HomeSection/>
      <AuxHomeSection/>
      <IntroServiceSection/>
      <MarketingServiceSection/>
      <EmailServiceSection/>
      <WorkSection/>
    </div>
  )
}

export default App
