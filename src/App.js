import './App.css'; 
import NavBar from './NavBar/NavBar';
import SmallNav from './NavBar/SmallNav';
import LandingPage from './LandingPage/LandingPage';
import FirstPage from './LandingPage/FirstPage';
import SecondPage from './LandingPage/SecondPage';
import ThirdPage from './LandingPage/ThirdPage';
import FourthPage from './LandingPage/FourthPage';
import FifthPage from './FifthPage';

function App() {
  return (
    <div className="App">
<NavBar/>
    <SmallNav/>
    <LandingPage/>
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>

    </div>
  )
}

export default App;
