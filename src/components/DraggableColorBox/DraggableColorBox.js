import React from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc'
import styles from './DraggableColorBox.styles'

const DraggableColorBox = SortableElement(props => {

  const { classes, name, color, handleClick } = props

  return (
    <div 
      style={{ backgroundColor: color}}
      className={classes.DraggableColorBox}
    >
      <div className={classes.BoxContent}>
        <span> {name} </span>
        <span> 
          <DeleteOutlinedIcon 
            className={classes.DeleteIcon}
            onClick={handleClick}
          /> 
        </span>
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)
