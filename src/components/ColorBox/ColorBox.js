import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import CopyToClipboard from 'react-copy-to-clipboard';
import './ColorBox.css'

class ColorBox extends Component {

  constructor(props) {
    super(props);
    this.state = { copied: false }
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() { 
    const { bgColor, name, moreUrl, showLink } = this.props
    const { copied } = this.state

    const isDark = chroma(bgColor).luminance() <= 0.35
    const isLight = chroma(bgColor).luminance() >= 0.35

    return (
      <CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
        <div style={{background: bgColor}} className='ColorBox'>
          <div 
            style={{background: bgColor}} 
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1> Copied </h1>
            <p className={`${isLight && 'dark-text'}`}> {bgColor} </p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
            <span className={isDark && 'light-text'}> {name} </span>
            </div>
            <button className={`copy-button ${isLight && 'dark-text'}`}> 
              Copy 
            </button>
          </div>
          { showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLight && 'dark-text'}`}> 
                More 
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox