import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/styles/App.css';
import Home from './components/pages/Home';
import Header from './components/Header';
import Login from './components/pages/Login';
import DishDetail from './components/pages/DishDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dish/:id" element={<DishDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;