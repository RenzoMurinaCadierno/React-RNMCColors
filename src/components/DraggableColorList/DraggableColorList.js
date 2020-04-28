import React from 'react'
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox'

const DraggableColorList = SortableContainer(({ colors, removeColor }) =>
  <div style={{ height: '100%' }}>
    {colors.map((c, i) => 
      <DraggableColorBox 
        key={c.name} color={c.color} name={c.name}
        index={i} handleClick={() => removeColor(c.name)}
      />
    )}
  </div>
)

export default DraggableColorList