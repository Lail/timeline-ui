import React from 'react';
import * as s from './styles';
import Event from '../Event';

const Timeline = ({ lanes, zoom, from, until, scale }) => {
  const dayWidth = 100 / scale;

  return (
    <s.Wrapper>
      <s.Header>
        <p>From {new Date(from).toLocaleDateString()} to {new Date(until).toLocaleDateString()}</p>
      </s.Header>
      <s.Events>
        { lanes && lanes.map((lane, i) => (
            lane.map((event, ii) => (
              <Event
                key={`event${ii}`}
                dayWidth={dayWidth}
                from={from}
                lane={i}
                {...event}
              >
                {event.name}
              </Event>
            ))
        ))}
      </s.Events>
      <s.Today from={from} dayWidth={dayWidth}/>
    </s.Wrapper>
  )
}
export default Timeline;
