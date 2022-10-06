import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Head from '../header/Head';
import NavState from '../hamburger/navState';
import MainMenu from '../hamburger/mainMenu';
import Politics from '../Politics/Politics';

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
      </Routes>
    </Router>
  );
}

export default App;
