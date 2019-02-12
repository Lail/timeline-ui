import React from 'react';
import * as s from './styles';
import StringyDate from '../../classes/StringyDate';

// using style obj for the actual positioning because
// styled-components isn't performant over ~200+ dynamic classes
const positionStyles = (lane, from, start, end, dayWidth) => (
  {
    top: `${35 * lane + 20}px`,
    left: `${new StringyDate(from).getDaysUntil(start) * dayWidth}%`,
    width: `${((new StringyDate(start).getDaysUntil(end) + 1) * dayWidth) - 0.25}%`,
  }
)

const Event = ({ lane, from, start, end, dayWidth, children }) => {
  return (
    <s.StyledEvent
      style={positionStyles(lane, from, start, end, dayWidth)}
    >
      {children}
    </s.StyledEvent>
  )
};
export default Event;
