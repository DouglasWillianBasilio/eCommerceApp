import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './modules/Home';

function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Header />
      <Home />
    </div>
  );
}

export default App;
