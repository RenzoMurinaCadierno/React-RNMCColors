import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './DraggableColorBox.styles'

function DraggableColorBox(props) {

  const { classes } = props

  return (
    <div 
      style={{ backgroundColor: props.color}}
      className={classes.DraggableColorBox}
    >
      {props.color}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
