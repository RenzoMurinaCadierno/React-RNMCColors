import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import styles from "./ColorpickerForm.styles";

class ColorpickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "", newColorName: "" };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isUniqueColorName", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isUniqueColor", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.createColor(newColor);
    this.setState({ newColorName: "" });
  };

  render() {
    const { isPaletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <>
        <ChromePicker
          className={classes.Picker}
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm
          className={classes.ColorNameForm}
          onSubmit={this.handleSubmit}
        >
          <TextValidator
            classes={classes.ColorNameInput}
            value={newColorName}
            name="newColorName"
            placeholder="Color name"
            variant="filled"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isUniqueColorName", "isUniqueColor"]}
            errorMessages={[
              "Must add a color name",
              "Color name already used",
              "Color already added",
            ]}
          />
          <Button
            className={classes.AddColor}
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: isPaletteFull
                ? "rgba(0, 0, 0, 0.12)"
                : currentColor,
            }}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </>
    );
  }
}

export default withStyles(styles)(ColorpickerForm);
