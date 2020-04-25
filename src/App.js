import React from 'react';
import Palette from './containers/Palette/Palette'
import initialPalettes from './assets/initialPalettes'
import { generatePalette } from './assets/colorHelpers'
import './App.css';

function App() {
  console.log(generatePalette(initialPalettes[4]))
  return (
    <div className="App">
      <Palette {...initialPalettes[4]} />
    </div>
  );
}

export default App;
