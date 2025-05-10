import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/SignInPage';
// import HomePage from './pages/HomePage'; // Placeholder
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import ThemeConfig from './theme/themeConfig';
import ForgotPassword from './components/ForgotPassword';

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <ThemeConfig>
      <div className="app-container">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword open={true} handleClose={() => {}} />} />
            <Route path="/" element={isAuthenticated ? <div>Home Page</div> : <Navigate to="/login" />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ThemeConfig>
  );
};

export default App;
