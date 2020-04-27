import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CopyToClipboard from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles'
import styles from './ColorBox.styles'

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
    const { 
      bgColor, name, moreUrl, showFullPalette, classes 
    } = this.props
    const { 
      copyText, colorName, seeMore, copyButton, colorBox, 
      boxContent, copyOverlay, showOverlay, copyMsg, showCopyMsg
    } = classes
    const { copied } = this.state

    return (
      <CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
        <div style={{background: bgColor}} className={colorBox}>
          <div 
            style={{background: bgColor}} 
            className={`${copyOverlay} ${copied && showOverlay}`}
          />
          <div className={`${copyMsg} ${copied && showCopyMsg}`}>
            <h1> Copied </h1>
            <p className={copyText}> {bgColor} </p>
          </div>
          <div>
            <div className={boxContent}>
              <span className={colorName}> {name} </span>
            </div>
            <button className={copyButton}> 
              Copy 
            </button>
          </div>
          { showFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={seeMore}> 
                More 
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)