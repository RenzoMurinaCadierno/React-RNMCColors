import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color'
import DraggableColorBox from '../../components/DraggableColorBox/DraggableColorBox'

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: `calc(100vh - 64px)`,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      open: true, currentColor: '', colors: [], 
      newColorName: '', newPaletteName: ''
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isUniqueColorName', value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    )
    ValidatorForm.addValidationRule('isUniqueColor', value =>
      this.state.colors.every(
        ({ color }) => color !== this.state.currentColor
      )
    )    
    ValidatorForm.addValidationRule('isUniquePaletteName', value =>
      this.props.palettes.every(
        ({ paletteName }) => 
          paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  }

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex })
  }

  createColor = () => {
    const newColor = { 
      color: this.state.currentColor,
      name: this.state.newColorName 
    }
    this.setState({ 
      colors: [...this.state.colors, newColor],
      newColorName: ''
    })
  }

  handleSubmit = () => {
    const newName = this.state.newPaletteName
    const newPalette = {
      id: newName.toLowerCase().replace(/ /g, '-'),
      paletteName: newName,
      colors: this.state.colors
    }
    this.props.savePalette(newPalette)
    this.props.history.push('/')
  }

  handleChange = ({ target: { name, value } }) => (
    this.setState({ [name]: value })
  )

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open, currentColor } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator 
                label='Palette name'
                name='newPaletteName'
                value={this.state.newPaletteName} 
                onChange={this.handleChange}
                validators={['required', 'isUniquePaletteName']}
                errorMessages={[
                  'Palette name cannnot be empty',
                  'Palette name already used'
                ]}
              />
              <Button variant='contained' color='primary' type='submit'> 
                Save Palette 
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
          <Typography variant='h4'> Design your palette </Typography>
          <div>
            <Button variant='contained' color='secondary'>
              Clear Palette
            </Button>          
            <Button variant='contained' color='primary'>
              Random Color
            </Button>
          </div>
          <ChromePicker 
            color={currentColor} 
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.createColor}>
            <TextValidator 
              value={this.state.newColorName}
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
              style={{ backgroundColor: this.state.currentColor }}
            > 
              Add color 
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.colors.map(c => 
            <DraggableColorBox color={c.color} name={c.name} />
          )}
        </main>
      </div>
    );
  }
}
 
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
