import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import Dialog from "@material-ui/core/Dialog"
import Avatar from "@material-ui/core/Avatar"
import DialogTitle from "@material-ui/core/DialogTitle"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined"
import CloseIcon from "@material-ui/icons/Close"
import Blue from "@material-ui/core/colors/blue"
import Red from "@material-ui/core/colors/red"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import MiniPalette from "../../components/MiniPalette/MiniPalette"
import styles from "./PaletteList.styles"

class PaletteList extends Component {
  constructor(props) {
    super(props)
    this.state = { isDeleteDialogOpened: false, paletteToDeleteId: "" }
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  openDeleteDialog = (id) =>
    this.setState({ isDeleteDialogOpened: true, paletteToDeleteId: id })

  closeDeleteDialog = () =>
    this.setState({ isDeleteDialogOpened: false, paletteToDeleteId: "" })

  handleDeletePalette = () => {
    this.props.deletePalette(this.state.paletteToDeleteId)
    this.closeDeleteDialog()
  }

  render() {
    const { palettes, classes } = this.props
    const { isDeleteDialogOpened } = this.state

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.h1}> RNMC Colors </h1>
            <Link to="/palette/new"> Create Palette </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  id={palette.id}
                  goToPalette={() => this.goToPalette(palette.id)}
                  deletePalette={this.openDeleteDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={isDeleteDialogOpened}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDeleteDialog}
        >
          <DialogTitle id="delete-dialog-title"> Delete palette? </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDeletePalette}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: Red[100], color: Red[600] }}>
                  <DeleteOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete"> Delete </ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDeleteDialog}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: Blue[100], color: Blue[600] }}
                >
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel"> Cancel </ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
