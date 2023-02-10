import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Playground from './components/Playground';
import Components from './pages/Components';
import Home from './pages/Home';
import CookiesPolicy from './pages/policies/CookiesPolicy';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import Contact from './pages/Contact';
import Error from './pages/errors/Error';
import FAQ from './pages/FAQ';
import ChangeLog from './pages/ChangeLog';
import Component from './components/Component';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LargeFooter from './components/LargeFooter';
import Profile from './pages/Profile';

function App() {
  const { isLoading, error, isAuthenticated, getIdTokenClaims, renewSession } =
    useAuth0();

  useEffect(() => {
    if (isAuthenticated === true) {
      console.log('User is authenticated');
    } else {
      console.log('User is not authenticated');
    }
    // debugging purposes
  });

  useEffect(() => {
    const initAuth0 = async () => {
      if (isAuthenticated) {
        return;
      }

      try {
        await getIdTokenClaims();
      } catch (err) {
        console.error(err);
      }
    };

    initAuth0();
  }, [isAuthenticated, getIdTokenClaims]);

  useEffect(() => {
    const renewSessionOnLoad = async () => {
      if (!isAuthenticated) return;

      try {
        await renewSession();
      } catch (err) {
        console.error(err);
      }
    };

    renewSessionOnLoad();
  }, [isAuthenticated, renewSession]);

  const [theme, setTheme] = useState('light'); // TODO handle light and dark mode using this state

  return (
    <div className='App'>
      <Nav isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/components' element={<Components />} />
        <Route path='/components/:id' element={<Component />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/error' element={<Error />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/change-log' element={<ChangeLog />} />
        <Route path='/profile' element={<Profile />} />

        {/* Policies & Terms routes */}
        <Route path='/cookies-policy' element={<CookiesPolicy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
      <LargeFooter />
    </div>
  );
}

export default App;
