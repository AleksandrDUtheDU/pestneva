import { HashRouter, Route, Routes } from 'react-router-dom';


import Layout from '../pages/Layout';
import Main from '../pages/mainPage'
import ServicesTabs from '../pages/servicesPage/servicesTabs';
import ServicesTabsPage from '../pages/servicesPage/servicesTabsPage';
import ServicesTabsPageDescr from '../pages/servicesPage/servicesTabsPageDescr';
import CaseCarouselPage from '../pages/caseСarouselPage';
import TitleWrapp from '../widgets/calc/TitleWrapp';
import Step1 from '../widgets/calc/Step1'
import Contact from '../pages/contactFormPage'
import Politics from '../pages/politicsPage'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/services/" element={<ServicesTabs />} />
          <Route path="/services/:list" element={<ServicesTabsPage />} />
          <Route path="/services/:list/:link" element={<ServicesTabsPageDescr />} />
          <Route path="/case/" element={<CaseCarouselPage />} />
          <Route path="/calc/" element={<TitleWrapp />}>
            <Route index element={<Step1 />} />
            <Route path="/calc/step2" element={<div>Step2</div>} />
            <Route path="/calc/step3" element={<div>Step3</div>} />
            <Route path="/calc/reult" element={<div>reult</div>} />
          </Route>
          <Route path="/contacts/" element={<Contact />} />
          <Route path="/privacy/" element={<Politics />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
