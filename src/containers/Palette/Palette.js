import React, { Component } from 'react'
import ColorBox from '../../components/ColorBox/ColorBox'
import './Palette.css'

class Palette extends Component {

  render() {
    
    const colorBoxes = this.props.colors.map(c =>
      <ColorBox bgColor={c.color} name={c.name} />
    )

    return (
      <div className='Palette'>
        {/* Navbar */}
        <div className='Palette-colors'>
          { colorBoxes }
        </div>
        {/* Footer */}
      </div>
    )
  }
}

export default Palette