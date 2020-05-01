import React, { PureComponent } from "react"
import { withStyles } from "@material-ui/styles"
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import styles from "./MiniPalette.styles"

class MiniPalette extends PureComponent {
  deletePalette = (e) => {
    e.stopPropagation()
    this.props.deletePalette(this.props.id)
  }

  render() {
    const { classes, paletteName, emoji, colors, goToPalette, id } = this.props
    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ))

    return (
      <div className={classes.root} onClick={() => goToPalette(id)}>
        <DeleteTwoToneIcon
          className={classes.DeleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}> {miniColorBoxes} </div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}> {emoji} </span>
        </h5>
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette)
