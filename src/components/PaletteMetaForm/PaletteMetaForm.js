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
    this.state = { open: true, newPaletteName: "" }
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

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
    this.props.hideForm()
  }

  render() {
    const { newPaletteName } = this.state
    const { handleSubmit, hideForm } = this.props

    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Palette name</DialogTitle>
        <Picker />
        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
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
                "Palette name already used",
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
    )
  }
}

export default PaletteMetaForm
