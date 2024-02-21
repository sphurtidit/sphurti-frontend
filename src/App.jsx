import './App.css'
import SportsSection from './Components/Sports_section/Sports_section'
import HeroPage from './pages/HeroPage/HeroPage'
import Navbar from './Components/Navbar/navbar'
import Timer from './Components/timer/timer'
import TeamSec from './Components/team_sec/team_sec'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
    <div className="background-container">
    <Navbar />   
    <HeroPage />
    <Timer/>
    <SportsSection/>
    <TeamSec/>
    <Footer/>
    </div> 
    </>
  )
}

export default App
