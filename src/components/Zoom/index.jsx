import React from 'react';
import * as s from './styles';
import Icon from '../Icon';

const Zoom = ({ dispatch }) => {
  return (
    <s.Wrapper>
      <s.ZoomButton onClick={() => dispatch({type:'zoom_out'})}>
        <Icon name='zoom_out' />
      </s.ZoomButton>
      <s.ZoomButton onClick={() => dispatch({type:'zoom_in'})}>
        <Icon name='zoom_in' />
      </s.ZoomButton>
    </s.Wrapper>
  )
};
export default Zoom;
