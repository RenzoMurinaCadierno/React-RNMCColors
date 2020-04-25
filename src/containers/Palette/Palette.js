import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import ColorBox from '../../components/ColorBox/ColorBox'
import './Palette.css'

class Palette extends Component {

  constructor(props) {
    super(props)
    this.state = { level: 500 }
  }

  changeLevel = level => this.setState({ level })

  render() {

    const { colors } = this.props.palette
    const { level } = this.state
    
    const colorBoxes = colors[level].map(c =>
      <ColorBox bgColor={c.hex} name={c.name} />
    )

    return (
      <div className='Palette'>
        <div className='slider'>
          <Slider 
            defaultValue={level} min={100} max={900} step={100}
            onAfterChange={this.changeLevel}   
          />
        </div>
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