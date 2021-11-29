import React from 'react';
import Navbar from './components/navigation/navbar';
import Footer from './components/views/footer/footer';
import './App.css';

function App() {
  return (
    <div className="container-sm">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;