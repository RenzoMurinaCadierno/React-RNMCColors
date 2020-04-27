import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Navbar from '../../components/Navbar/Navbar'
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter'
import ColorBox from '../../components/ColorBox/ColorBox'
import styles from './Palette.styles'

class Palette extends Component {

  constructor(props) {
    super(props)
    this.state = { level: 500, format: 'hex' }
  }

  changeLevel = level => this.setState({ level })

  changeFormat = value => this.setState({ format: value })

  render() {

    const { colors, paletteName, emoji, id } = this.props.palette
    const { Palette, Colors } = this.props.classes
    const { level, format } = this.state
    
    const colorBoxes = colors[level].map(c =>
      <ColorBox 
        key={c.id} bgColor={c[format]} name={c.name} 
        moreUrl={`/palette/${id}/${c.id}`} showFullPalette
      />
    )

    return (
      <div className={Palette}>
        <Navbar 
          level={level} changeLevel={this.changeLevel}
          handleChange={this.changeFormat} showSlider
        />
        <div className={Colors}>
          { colorBoxes }
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(Palette)