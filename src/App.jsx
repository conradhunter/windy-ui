import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
import Error from './pages/errors/Error';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import ChangeLog from './pages/ChangeLog';
import Component from './components/Component';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const names = ['utilityUI', 'windytailUI', 'windy component library'];

  return (
    <div className='App'>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn setIsAuth={setIsAuth} />} />
        <Route
          path='/welcome'
          element={<InitialAuth setIsAuth={setIsAuth} />}
        />
        <Route path='/components' element={<Components />} />
        <Route path='/components/:id' element={<Component />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/error' element={<Error />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/change-log' element={<ChangeLog />} />

        {/* Policies & Terms routes */}
        <Route path='/cookies-policy' element={<CookiesPolicy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
