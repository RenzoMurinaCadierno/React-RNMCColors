import React from 'react';
import Palette from './containers/Palette/Palette'
import initialPalettes from './assets/initialPalettes'
import { generatePalette } from './assets/colorHelpers'
import './App.css';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(initialPalettes[0])} />
    </div>
  );
}

export default App;
