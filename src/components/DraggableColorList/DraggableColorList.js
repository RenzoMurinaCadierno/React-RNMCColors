import React from "react"
import { withStyles } from "@material-ui/styles"
import { SortableContainer } from "react-sortable-hoc"
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox"
import styles from "./DraggableColorList.styles"

const DraggableColorList = SortableContainer(
  ({ colors, removeColor, classes }) => (
    <div className={classes.DraggableColorList} style={{ height: "100%" }}>
      {colors.map((c, i) => (
        <DraggableColorBox
          key={c.name}
          color={c.color}
          name={c.name}
          index={i}
          handleClick={() => removeColor(c.name)}
        />
      ))}
    </div>
  )
)

export default withStyles(styles)(DraggableColorList)
