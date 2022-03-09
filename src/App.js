import React from 'react';
import Application from './components/navigation/Application';
import Footer from './components/views/footer/footer';
import './App.css';
import Mobilemenu from './components/navigation/mobilemenu';

function App() {
  return (
    <div className="container-sm">
      <Mobilemenu />
      <Application />
      <Footer />
    </div>
  );
}

export default App;