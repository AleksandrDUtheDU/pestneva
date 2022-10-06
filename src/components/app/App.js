import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './bootstrap.min.css'
import './bootstrap.min.css.map'
import './style.css'

import Head from '../header/Head';
// import SocialPanel from '../socialPanel/SocialPanel';
import NavState from '../hamburger/navState';
import MainMenu from '../hamburger/mainMenu';
// import ForMe from '../forMe/ForMe';
// import MySoftSkill from '../mySoftSkill/MySoftSkill';
// import MyHardSkill from '../myHardSkill/MyHardSkill';
// import MyWorks from '../myWorks/MyWorks';
import Prises from '../prises/Prises';
// import Contact from '../contact/Contact';
import Politics from '../Politics/Politics';
import ControlledCarousel from '../servicesCarousel/ServicesCarousel';

function MainPage() {
  return (
    <>
      <Head />
      <ControlledCarousel />
      <Prises />
      {/* <ForMe />
      <MySoftSkill />
      <MyHardSkill />
      <MyWorks />
      <Prises />
      <Contact /> */}
    </>
  )
}

function App() {
  return (
    <Router>
      {/* <SocialPanel /> */}
      <NavState>
        <MainMenu />
      </NavState>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy/" element={<Politics />} />
      </Routes>
    </Router>
  );
}

export default App;
