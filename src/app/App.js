import { HashRouter, Route, Routes } from 'react-router-dom';

import NavState from '../widgets/navMenu/navState';
import MainMenu from '../widgets/navMenu/mainMenu';
import Footer from '../widgets/Footer'


import Main from '../pages/mainPage'
import ServicesTabs from '../pages/servicesPage/servicesTabs';
import ServicesTabsPage from '../pages/servicesPage/servicesTabsPage';
import ServicesTabsPageDescr from '../pages/servicesPage/servicesTabsPageDescr';
import CaseCarouselPage from '../pages/caseСarouselPage';
import Contact from '../pages/contactFormPage'
import Politics from '../pages/politicsPage'


function MainPage() {
  return (
    <>
      <Main />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <NavState>
        <MainMenu />
      </NavState>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services/" element={<ServicesTabs />} />
        <Route path="/services/:list" element={<ServicesTabsPage />} />
        <Route path="/services/:list/:link" element={<ServicesTabsPageDescr />} />
        <Route path="/case/" element={<CaseCarouselPage />} />
        <Route path="/contacts/" element={<Contact />} />
        <Route path="/privacy/" element={<Politics />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
