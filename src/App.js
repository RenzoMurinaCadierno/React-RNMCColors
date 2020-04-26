import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PaletteList from './containers/PaletteList/PaletteList'
import Palette from './containers/Palette/Palette'
import SingleColorPalette from './containers/SingleColorPalette/SingleColorPalette'
import initialPalettes from './assets/initialPalettes'
import { generatePalette } from './assets/colorHelpers'
import './App.css';

function App() {

  const findPalette = id =>
    initialPalettes.find(palette => palette.id === id)

  return (
    <Switch>
      <Route 
        exact path='/' 
        render={routeProps => 
          <PaletteList palettes={initialPalettes} {...routeProps} />
        }
      />
      <Route 
        exact path='/palette/:id' 
        render={routeProps => 
          <Palette palette={
            generatePalette(findPalette(routeProps.match.params.id))         
          } />
        }
      />
      <Route 
        exact path='/palette/:paletteId/:colorId' 
        render={() => <SingleColorPalette />}
      />
    </Switch>
  )
}

export default App
