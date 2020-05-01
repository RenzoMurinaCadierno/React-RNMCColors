import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import classNames from "classnames"
import PaletteFormNav from "../../components/PaletteFormNav/PaletteFormNav"
import ColorpickerForm from "../../components/ColorpickerForm/ColorpickerForm"
import DraggableColorList from "../../components/DraggableColorList/DraggableColorList"
import arrayMove from "array-move"
import initialPalettes from "../../assets/initialPalettes"
import styles from "./NewPaletteForm.styles"

class NewPaletteForm extends Component {
  static defaultProps = { maxColors: 20 }

  constructor(props) {
    super(props)
    this.state = {
      open: true,
      currentColor: "",
      colors: initialPalettes[0].colors
    }
  }

  createColor = (newColor) => {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    })
  }

  clearColors = () => this.setState({ colors: [] })

  addRandomColor = () => {
    const allColors =
      this.props.palettes.length > 0
        ? this.props.palettes.map((p) => p.colors).flat()
        : this.state.colors

    const rnd = Math.floor(Math.random() * allColors.length)
    const rndColor = allColors[rnd]

    this.setState({ colors: [...this.state.colors, rndColor] })
  }

  removeColor = (colorName) => {
    this.setState({
      colors: this.state.colors.filter((c) => c.name !== colorName)
    })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }))
  }

  handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
    newPalette.colors = this.state.colors
    this.props.savePalette(newPalette)
    this.props.history.push("/")
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, maxColors, palettes } = this.props
    const { open, colors } = this.state

    const isPaletteFull = colors.length >= maxColors

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.Container}>
            <Typography variant="h4" gutterBottom>
              Design your palette
            </Typography>
            <div className={classes.Buttons}>
              <Button
                className={classes.Button}
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.Button}
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={isPaletteFull}
              >
                Random Color
              </Button>
            </div>
            <ColorpickerForm
              colors={colors}
              isPaletteFull={isPaletteFull}
              createColor={this.createColor}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={5}
          />
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
