import React from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './PaletteFooter.styles'

const PaletteFooter = props => {

  const { paletteName, emoji, classes } = props
  const { PaletteFooter, Emoji } = classes

  return (
    <footer className={PaletteFooter}>
      {paletteName}
      <span className={Emoji}> {emoji} </span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);