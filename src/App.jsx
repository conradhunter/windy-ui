import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Navigation/Nav';
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
import Profile from './pages/Profile';
import LargeFooter from './components/Footer/LargeFooter';

function App() {
  const { isAuthenticated } = useAuth0();

  const [theme, setTheme] = useState('light'); // TODO handle light and dark mode state change
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Demo auth account:
  // email: email@example.com
  // password: Test1234

  // * Domain = http://windikit.com/

  const [dynamicUserData, setDynamicUserData] = useState();

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem('userData');
  //   if (storedUserData) {
  //     setDynamicUserData(JSON.parse(storedUserData));
  //   } else {
  //     fetch('http://localhost:5100/api/userData')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         const userData = data;
  //         setDynamicUserData(userData);
  //         localStorage.setItem('userData', JSON.stringify(userData));
  //       })
  //       .catch((error) => {
  //         console.error('There was a problem with the fetch operation:', error);
  //       });
  //   }
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
