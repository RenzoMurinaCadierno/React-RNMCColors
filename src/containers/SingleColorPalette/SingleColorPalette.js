import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import ColorBox from "../../components/ColorBox/ColorBox"
import Navbar from "../../components/Navbar/Navbar"
import PaletteFooter from "../../components/PaletteFooter/PaletteFooter"
import styles from "./SingleColorPalette.styles"

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = { format: "hex" }
  }

  // extract all shade values from one single color inside
  // the color array
  gatherShades = (palette, colorFilterBy) => {
    let shades = []
    const allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorFilterBy)
      )
    }

    return shades.slice(1) // do not need value 50
  }

  changeFormat = (value) => this.setState({ format: value })

  render() {
    const { format } = this.state
    const { paletteName, emoji, id } = this.props.palette
    const { Palette, Colors, GoBack } = this.props.classes

    const colorBoxes = this._shades.map((c) => (
      <ColorBox
        key={c.name}
        name={c.name}
        bgColor={c[format]}
        showFullPalette={false}
      />
    ))

    return (
      <div className={Palette}>
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className={Colors}>
          {colorBoxes}
          <div className={GoBack}>
            <Link to={`/palette/${id}`} className="back-button">
              Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
