import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color'

class ColorpickerForm extends Component {

  constructor(props) {
    super(props)
    this.state = { currentColor: '', newColorName: '' }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isUniqueColorName', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    )
    ValidatorForm.addValidationRule('isUniqueColor', value =>
      this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      )
    )    
  }

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex })
  }

  handleChange = ({ target: { name, value } }) => (
    this.setState({ [name]: value })
  )

  handleSubmit = () => {
    const newColor = { 
      color: this.state.currentColor,
      name: this.state.newColorName 
    }
    this.props.createColor(newColor)
    this.setState({ newColorName: '' })
  }

  render() {

    const { isPaletteFull } = this.props
    const { currentColor, newColorName } = this.state

    return (
      <div>
        <ChromePicker 
          color={currentColor} 
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator 
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={[
              'required', 'isUniqueColorName', 'isUniqueColor'
            ]}
            errorMessages={[
              'Must add a color name', 
              'Color name already used',
              'Color already added'
            ]}  
          />
          <Button 
            variant='contained' color='primary' type='submit'
            style={{ 
              backgroundColor: isPaletteFull
                ? 'rgba(0, 0, 0, 0.12)' : currentColor 
            }}
            disabled={isPaletteFull}
          > 
            { isPaletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default ColorpickerForm


