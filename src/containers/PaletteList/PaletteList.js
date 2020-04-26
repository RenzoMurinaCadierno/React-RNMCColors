import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import MiniPalette from '../../components/MiniPalette/MiniPalette'

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '80%',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
}

class PaletteList extends Component {

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() { 
    const { palettes, classes } = this.props
    
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1> RNMC Colors</h1>
          </nav>
          <div className={classes.palettes}>
            { palettes.map(palette => 
              <MiniPalette 
                {...palette} 
                goToPalette={() => this.goToPalette(palette.id)} 
              /> 
            )}
          </div>
        </div>
      </div>
    );
  }
}
 
export default withStyles(styles)(PaletteList)