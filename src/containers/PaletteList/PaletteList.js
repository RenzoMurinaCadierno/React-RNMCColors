import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PaletteList extends Component {

  render() { 
    const { palettes } = this.props
    
    return (
      <div>
        <div> react colors</div>
        {palettes.map(palette => 
          <p>
            <Link to={`/palette/${palette.id}`}> 
              {palette.paletteName} 
            </Link>
          </p>
        )}
      </div>
    );
  }
}
 
export default PaletteList;