import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Playground from "./components/Playground";
import InitialAuth from "./pages/auth/InitialAuth";
import SignIn from "./pages/auth/SignIn";
import Components from "./pages/Components";
import Home from "./pages/Home";
import CookiesPolicy from "./pages/policies/CookiesPolicy";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsOfService from "./pages/policies/TermsOfService";

function App() {
  // const [value, setValue] = useState("");
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);


  return (
    <div className="App">
        <Nav isAuth={isAuth} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/welcome" element={<InitialAuth />} />
        <Route exact path="/components" element={<Components />} />
        <Route exact path="/playground" element={<Playground />} />

        {/* Policies & Terms routes */}
        <Route exact path="/cookies-policy" element={<CookiesPolicy />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      {/* dashboard style layouts with different editing, adding, deleting, sorting logic */}
    </div>
  );
}

export default App;
