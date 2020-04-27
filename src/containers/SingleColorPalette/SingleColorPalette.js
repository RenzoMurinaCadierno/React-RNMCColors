import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import ColorBox from '../../components/ColorBox/ColorBox'
import Navbar from '../../components/Navbar/Navbar'
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter'

const styles = {
  Palette: {
    height: '97vh',
    display: 'flex',
    flexDirection: 'column'
  },
  Colors: {
    height: '90%'
  },
  GoBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4.5px',
    opacity: 1,
    backgroundColor: 'black',
    "& a": {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      border: 'none',
      color: 'white',
    }
  }
}

class SingleColorPalette extends Component {

  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = { format: 'hex' }
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

  changeFormat = value => this.setState({ format: value })

  render() {

    const { format } = this.state
    const { paletteName, emoji, id } = this.props.palette
    const { Palette, Colors, GoBack } = this.props.classes

    const colorBoxes = this._shades.map(c => (
      <ColorBox 
        key={c.name} name={c.name} 
        bgColor={c[format]} showFullPalette={false} 
      />
    ))

    return (
      <div className={Palette}>
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className={Colors}>
          {colorBoxes}
          <div className={GoBack}>
            <Link to={`/palette/${id}`} className='back-button'> Back </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)