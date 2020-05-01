import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
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
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    )
  }

  syncLocalStorage = () =>
    window.localStorage.setItem(
      "RNMCColors",
      JSON.stringify(this.state.palettes)
    )

  deletePalette = (id) => {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id)
      }),
      this.syncLocalStorage
    )
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <div className="page">
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <div className="page">
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <div className="page">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    )
  }
}

export default App
