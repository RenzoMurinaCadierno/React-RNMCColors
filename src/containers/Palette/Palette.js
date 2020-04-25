import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ColorBox from '../../components/ColorBox/ColorBox'
import './Palette.css'

class Palette extends Component {

  constructor(props) {
    super(props)
    this.state = { level: 500, format: 'hex' }
  }

  changeLevel = level => this.setState({ level })

  changeFormat = value => this.setState({ format: value })

  render() {

    const { colors } = this.props.palette
    const { level, format } = this.state
    
    const colorBoxes = colors[level].map(c =>
      <ColorBox bgColor={c[format]} name={c.name} />
    )

    return (
      <div className='Palette'>
        <Navbar 
          level={level} changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className='Palette-colors'>
          { colorBoxes }
        </div>
        {/* Footer */}
      </div>
    )
  }
}

export default Palette