import React from 'react';
import Navbar from './components/navigation/navbar';
import Footer from './components/views/footer/footer';
import './App.css';
import Mobilemenu from './components/navigation/mobilemenu';

function App() {
  return (
    <div className="container-sm">
      <Mobilemenu />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;