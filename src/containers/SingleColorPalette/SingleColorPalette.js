import React, { Component } from 'react'
import ColorBox from '../../components/ColorBox/ColorBox'

export default class SingleColorPalette extends Component {

  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
  }

  // extract all shade values from one single color inside
  // the color array
  gatherShades = (palette, colorFilterBy) => {
    let shades = []
    const allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilterBy)
      )
    }

    return shades.slice(1) // do not need value 50
  }

  render() {

    const colorBoxes = this._shades.map(c => (
      <ColorBox 
        hey={c.id} name={c.name} bgColor={c.hex}
        showLink={false} 
      />
    ))

    return (
      <div className='Palette'>
        <h1> Single color palette </h1>
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
      </div>
    )
  }
}


