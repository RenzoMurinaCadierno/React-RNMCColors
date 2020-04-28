import React from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from './DraggableColorBox.styles'

function DraggableColorBox(props) {

  const { classes } = props

  return (
    <div 
      style={{ backgroundColor: props.color}}
      className={classes.DraggableColorBox}
    >
      <div className={classes.BoxContent}>
        <span> {props.name} </span>
        <span> 
          <DeleteOutlinedIcon className={classes.DeleteIcon}/> 
        </span>
      </div>
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
