import React from "react"
import { withStyles } from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined"
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import styles from "./MiniPalette.styles"

const MiniPalette = (props) => {
  const { classes, paletteName, emoji, colors, goToPalette } = props
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    />
  ))

  return (
    <div className={classes.root} onClick={goToPalette}>
      <div className={classes.Delete}>
        <DeleteTwoToneIcon
          className={classes.DeleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>
      <div className={classes.colors}> {miniColorBoxes} </div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}> {emoji} </span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
