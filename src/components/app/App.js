import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Head from '../header/Head';
import NavState from '../hamburger/navState';
import MainMenu from '../hamburger/mainMenu';
import ServicesTab from '../servicesTab/servicesTab';
import Politics from '../Politics/Politics';
import TabsPage from '../pages/TabsPage';
import CaseCarousel from '../caseСarousel/caseСarousel';
//TabsPageDescr

function MainPage() {
  return (
    <>
      <Head />
    </>
  )
}

function App() {
  return (
    <Router>
      <NavState>
        <MainMenu />
      </NavState>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy/" element={<Politics />} />
        <Route path="/services/" element={<ServicesTab />} />
        <Route path="/services/:list" element={<TabsPage />} />
        {/* <Route path="/services/:list/:link" element={<TabsPageDescr />} /> */}

        <Route path="/case/" element={<CaseCarousel />} />
        <Route path="/contact/" element={<Politics />} />
      </Routes>
    </Router>
  );
}

export default App;
