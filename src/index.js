import React, { useReducer, Fragment } from 'react';
import { render } from 'react-dom';
import timelineItems from './timelineItems';
import sortItems from './util/sortItems';
import {zoomReducer, moveReducer} from './reducers';
import StringyDate from './classes/StringyDate';
import * as s from './styles';
import Timeline from './components/Timeline';
import Zoom from './components/Zoom';
import Nav from './components/Nav';

const lanes = sortItems(timelineItems);

const App = () => {
  const [zoom, dispatchZoom] = useReducer(zoomReducer, 5);
  const [center, dispatchMove] = useReducer(moveReducer, new StringyDate());
  const scale = 6 + (zoom * zoom);
  const from = center.setDaysBefore(Math.round(scale/2));
  const until = center.setDaysAfter(Math.round(scale/2));

  return (
    <Fragment>
      <s.GlobalStyle />
      <s.Wrapper>
        <Timeline
          lanes={lanes}
          zoom={zoom}
          from={from}
          until={until}
          scale={scale}
        />
        <Zoom dispatch={dispatchZoom} />
        <Nav dispatch={dispatchMove} scale={scale} />
      </s.Wrapper>
    </Fragment>
  )
};

render(<App />, document.getElementById('root'));
