import React from 'react';
import Palette from './containers/Palette/Palette'
import initialPalettes from './assets/initialPalettes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Palette {...initialPalettes[4]} />
    </div>
  );
}

export default App;
