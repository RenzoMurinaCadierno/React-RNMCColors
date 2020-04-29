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
    this.state = { newPaletteName: "", showForm: false }
  }

  showForm = () => this.setState({ showForm: true })

  hideForm = () => this.setState({ showForm: false })

  render() {
    const {
      classes,
      open,
      handleSubmit,
      handleDrawerOpen,
      palettes
    } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a palette
            </Typography>
          </Toolbar>
          <div className={classes.NavButtons}>
            <Link to="/">
              <Button
                className={classes.Button}
                variant="contained"
                color="secondary"
              >
                Back to Palettes
              </Button>
            </Link>
            <Button
              className={classes.Button}
              variant="contained"
              color="primary"
              onClick={this.showForm}
            >
              Save Palette
            </Button>
            {this.state.showForm && (
              <PaletteMetaForm
                palettes={palettes}
                handleSubmit={handleSubmit}
                hideForm={this.hideForm}
              />
            )}
          </div>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)
