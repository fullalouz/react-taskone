import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="main-card">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}