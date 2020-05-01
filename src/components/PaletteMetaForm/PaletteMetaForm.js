import React, { Component } from "react"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Picker } from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props)
    this.state = { stage: "form", newPaletteName: "" }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isUniquePaletteName", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  handleClickOpen = () => this.setState({ open: true })

  handleClose = () => {
    this.setState({ open: false })
    this.props.hideForm()
  }

  showEmojiPicker = () => this.setState({ stage: "emoji" })

  savePalette = (emojiPickerObj) => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emojiPickerObj.native
    }
    this.props.handleSubmit(newPalette)
    this.setState({ stage: "" })
  }

  render() {
    const { newPaletteName, stage } = this.state
    const { hideForm } = this.props

    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">
            Choose an emoji for the palette
          </DialogTitle>
          <Picker onSelect={this.savePalette} title="Palette's emoji" />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Palette name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Enter a name for the palette. Palette names cannot be repeated.
              </DialogContentText>
              <TextValidator
                label="Palette name"
                name="newPaletteName"
                value={newPaletteName}
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={["required", "isUniquePaletteName"]}
                errorMessages={[
                  "Palette name cannnot be empty",
                  "Palette name already used"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    )
  }
}

export default PaletteMetaForm
