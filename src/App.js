import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import PaletteList from "./containers/PaletteList/PaletteList"
import Palette from "./containers/Palette/Palette"
import SingleColorPalette from "./containers/SingleColorPalette/SingleColorPalette"
import NewPaletteForm from "./containers/NewPaletteForm/NewPaletteForm"
import initialPalettes from "./assets/initialPalettes"
import { generatePalette } from "./assets/colorHelpers"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem("RNMCColors"))
    this.state = { palettes: savedPalettes || initialPalettes }
  }

  findPalette = (id) => this.state.palettes.find((palette) => palette.id === id)

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, () =>
      this.syncLocalStorage()
    )
  }

  syncLocalStorage = () =>
    window.localStorage.setItem(
      "RNMCColors",
      JSON.stringify(this.state.palettes)
    )

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}

export default App
