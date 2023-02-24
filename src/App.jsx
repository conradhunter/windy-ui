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
import Error from './pages/error/Error';
import FAQ from './pages/FAQ';
import ChangeLog from './pages/ChangeLog';
import Component from './components/Component';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LargeFooter from './components/LargeFooter';
import Profile from './pages/Profile';
import axios from 'axios';

function App() {
  const { isAuthenticated } = useAuth0();

  const [theme, setTheme] = useState('light'); // TODO handle light and dark mode using this state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Demo auth account:
  // email: email@example.com
  // password: Test1234

  const [data, setData] = useState();

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5100/api/data')
  //     .then(function (response) {
  //       console.log(response.data);
  //       const { data } = response.data;
  //       setData(data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

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
        <Route path='/profile' element={<Profile setTheme={setTheme} />} />

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
