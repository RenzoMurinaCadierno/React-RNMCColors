import React, { Component } from 'react';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = { format: 'hex' }
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ format: value })
    this.props.handleChange(value)
  }

  render () {

    const { level, changeLevel } = this.props
    const { format } = this.state

    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>rnmccolors</a>
        </div>
        <div className='slider-container'>
          <span> Level: {level} </span>
          <div className='slider'>
            <Slider
              defaultValue={level} min={100} max={900} step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'> HEX: #ffffff </MenuItem>
            <MenuItem value='rgb'> RGB: rgb(255,255,255) </MenuItem>
            <MenuItem value='rgba'> RGBA: rgba(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar