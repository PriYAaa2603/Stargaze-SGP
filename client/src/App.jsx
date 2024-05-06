// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import Startup from './pages/Startup';
import { useSelector } from 'react-redux';

export default function App() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {currentUser ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Startup />} />
        )}
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
