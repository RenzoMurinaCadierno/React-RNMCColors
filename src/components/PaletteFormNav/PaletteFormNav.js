import React, { Component } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import PaletteMetaForm from "../../components/PaletteMetaForm/PaletteMetaForm"
import styles from "./PaletteFormNav.styles"

class PaletteFormNav extends Component {
  constructor(props) {
    super(props)
    this.state = { newPaletteName: "" }
  }

  render() {
    const {
      classes,
      open,
      handleSubmit,
      handleDrawerOpen,
      palettes,
    } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a palette
            </Typography>
          </Toolbar>
          <div className={classes.NavButtons}>
            <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} />
            <Link to="/">
              <Button variant="contained" color="secondary">
                Back to Palettes
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)
