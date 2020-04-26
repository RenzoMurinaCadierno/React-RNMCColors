import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = { format: 'hex', open: false }
  }

  handleFormatChange = ({ target: { value } }) => {
    this.setState({ format: value, open: true })
    this.props.handleChange(value)
  }

  handleCloseSnackbar = () => this.setState({ open: false })

  render() {

    const { level, changeLevel, showSlider } = this.props
    const { format, open } = this.state

    return (
      <header className='Navbar'>
        <div className='logo'>
          <Link to='/'> RNMC Colors </Link>
        </div>
        {
          showSlider && (
            <div className='slider-container'>
              <span> Level: {level} </span>
              <div className='slider'>
                <Slider
                  defaultValue={level} min={100} max={900} step={100}
                  onAfterChange={changeLevel}
                />
              </div>
            </div>
          )
        }
        <div className='select-container'>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'> HEX: #ffffff </MenuItem>
            <MenuItem value='rgb'> RGB: rgb(255,255,255) </MenuItem>
            <MenuItem value='rgba'> RGBA: rgba(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id='message-id'> Format changed: {format.toUpperCase()} </span>
          }
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={this.handleCloseSnackbar}
          action={[
            <IconButton 
              key='close' aria-label='close' color='inherit'
              onClick={this.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default Navbar