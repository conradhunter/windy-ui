import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../backend/FirebaseConfig';
import CloseIcon from '@mui/icons-material/Close';

function InitialAuth({ setIsAuth, isAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreePolicy, setAgreePolicy] = useState(false);
  const navigate = useNavigate();

  async function signUp() {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function handleSignUp(event) {
    event.preventDefault();
    signUp(auth, email, password);
    setIsAuth(true);
    navigate('/');
  }

  // if (agreePolicy) {
  //   signup();
  // } else {
  //   console.error('You must agree to the policy before signing up.');
  // }

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <Link to="/" className="absolute top-8 left-8">
        <CloseIcon />
      </Link>
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto py-12 px-8 bg-gray-100 rounded-xl text-center shadow-2xl">
          <span className="text-sm text-gray-500 font-semibold uppercase">
            Welcome
          </span>
          <h3 className="mb-8 text-3xl font-bold font-heading">
            Create new account
          </h3>
          <form>
            <input
              className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
              type="email"
              placeholder="E-mail address"
              autoComplete=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="inline-block mb-4">
              <input
                className="mr-1"
                type="checkbox"
                name="terms"
                onChange={(e) => setAgreePolicy(e.target.checked)}
              />
              <span className="text-sm text-gray-500">
                By signing up, you agree to our{' '}
                <Link
                  className="font-bold hover:underline"
                  to="/terms-of-service"
                >
                  Terms of Service
                </Link>
                ,{' '}
                <Link
                  className="font-bold hover:underline"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  className="font-bold hover:underline"
                  to="/cookies-policy"
                >
                  Cookies Policy
                </Link>
                .
              </span>
            </label>
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-500">
            <Link className="font-bold hover:underline" to="/sign-in">
              <span>Already have an account?</span> Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default InitialAuth;
