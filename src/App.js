import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddStudent from './pages/AddStudent';
import ClassList from './pages/ClassList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-student" element={<AddStudent />} />
        <Route path="/dashboard/class-list" element={<ClassList />} />
      </Routes>
    </div>
  );
}

export default App;

