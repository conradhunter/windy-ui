import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Playground from './components/Playground';
import InitialAuth from './pages/auth/InitialAuth';
import SignIn from './pages/auth/SignIn';
import Components from './pages/Components';
import Home from './pages/Home';
import CookiesPolicy from './pages/policies/CookiesPolicy';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import Contact from './pages/Contact';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/sign-in"
          element={<SignIn setIsAuth={setIsAuth} />}
        />
        <Route
          exact
          path="/welcome"
          element={<InitialAuth setIsAuth={setIsAuth} />}
        />
        <Route exact path="/components" element={<Components setValue={setValue} />} />
        <Route exact path="/playground" element={<Playground />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* Policies & Terms routes */}
        <Route exact path="/cookies-policy" element={<CookiesPolicy />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
