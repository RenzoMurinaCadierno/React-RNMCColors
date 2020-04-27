import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PaletteList from './containers/PaletteList/PaletteList'
import Palette from './containers/Palette/Palette'
import SingleColorPalette from './containers/SingleColorPalette/SingleColorPalette'
import NewPaletteForm from './containers/NewPaletteForm/NewPaletteForm'
import initialPalettes from './assets/initialPalettes'
import { generatePalette } from './assets/colorHelpers'
import './App.css';

function App() {

  const findPalette = id =>
    initialPalettes.find(palette => palette.id === id)

  return (
    <Switch>
      <Route
        exact path='/palette/new'
        render={() => <NewPaletteForm />}
      />
      <Route 
        exact path='/palette/:paletteId/:colorId' 
        render={routeProps => 
          <SingleColorPalette 
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )} 
        />
        }
      />
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
    </Switch>
  )
}

export default App
