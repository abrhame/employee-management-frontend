import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './services/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<ProtectedRoute children={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;