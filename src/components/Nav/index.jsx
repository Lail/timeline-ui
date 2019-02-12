import React, { Fragment } from 'react';
import * as s from './styles';
import Icon from '../Icon';

const Nav = ({ dispatch, scale }) => {
  return (
    <Fragment>
      <s.BackButton onClick={() => dispatch({type:'back', scale:scale})}>
        <Icon name='chevron_left' />
      </s.BackButton>
      <s.ForwardButton onClick={() => dispatch({type:'forward', scale:scale})}>
        <Icon name='chevron_right' />
      </s.ForwardButton>
    </Fragment>
  )
};
export default Nav;
