import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import PaletteFormNav from '../../components/PaletteFormNav/PaletteFormNav'
import ColorpickerForm from '../../components/ColorpickerForm/ColorpickerForm'
import DraggableColorList from '../../components/DraggableColorList/DraggableColorList'
import { arrayMove } from 'react-sortable-hoc'
import { drawerWidth } from '../../assets/globalStylesVars'

const styles = theme => ({
  root: {
    display: 'flex',
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

  static defaultProps = { maxColors: 20 }

  constructor(props) {
    super(props)
    this.state = { 
      open: true, currentColor: '', 
      colors: this.props.palettes[0].colors, 
    }
  }

  createColor = newColor => {
    this.setState({ 
      colors: [...this.state.colors, newColor],
      newColorName: ''
    })
  }

  clearColors = () => this.setState({ colors: [] })

  addRandomColor = () => {
    const allColors = this.props.palettes
      .map(p => p.colors)
      .flat()
    
    const rnd = Math.floor(Math.random() * allColors.length)
    const rndColor = allColors[rnd]

    this.setState({ colors: [...this.state.colors, rndColor]})
  }

  removeColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(c => c.name !== colorName)
    })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleSubmit = newPaletteName => {
    const newPalette = {
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      paletteName: newPaletteName,
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
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    
    const isPaletteFull = colors.length >= maxColors

    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open} palettes={palettes} 
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
          <Typography variant='h4'> Design your palette </Typography>
          <div>
            <Button 
              variant='contained' color='secondary'
              onClick={this.clearColors}
            >
              Clear Palette
            </Button>          
            <Button 
              variant='contained' color='primary'
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
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList 
            colors={colors}
            removeColor={this.removeColor}
            axis='xy' onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}
 
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
