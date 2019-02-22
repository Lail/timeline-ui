import React from 'react';
import Zoom from './index';
import { mount, shallow } from 'enzyme';

it('should render <Zoom/>', () => {
  const wrapper = mount(<Zoom />);
  expect(wrapper.find('.zoom_out')).toExist();
  expect(wrapper.find('.zoom_in')).toExist();
});

it('should dispatch zoom_out', () => {
  const dispatch = jest.fn(action => action);
  const wrapper = mount(<Zoom dispatch={dispatch} />);
  wrapper.find('.zoom_out').simulate('click');
  expect(dispatch).toHaveLastReturnedWith({type:'zoom_out'});
});

it('should dispatch zoom_in', () => {
  const dispatch = jest.fn(action => action);
  const wrapper = mount(<Zoom dispatch={dispatch} />);
  wrapper.find('.zoom_in').simulate('click');
  expect(dispatch).toHaveLastReturnedWith({type:'zoom_in'});
});
