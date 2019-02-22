import { zoomReducer, moveReducer } from './reducers';
import StringyDate from './classes/StringyDate';

it('zoomReducer should decrease on zoom_in', () => {
  const reducer = zoomReducer(5, { type: 'zoom_in' });
  expect(reducer).toBe(4);
});

it('zoomReducer should have a floor of 1', () => {
  const reducer = zoomReducer(1, { type: 'zoom_in' });
  expect(reducer).toBe(1);
});

it('zoomReducer should increase on zoom_out', () => {
  const reducer = zoomReducer(5, { type: 'zoom_out' });
  expect(reducer).toBe(6);
});

it('zoomReducer should have a ceiling of 10', () => {
  const reducer = zoomReducer(10, { type: 'zoom_out' });
  expect(reducer).toBe(10);
});

it('moveReducer step back on back', () => {
  const reducer = moveReducer(new StringyDate('2019-01-15'), { type: 'back', scale: 3 });
  expect(reducer.valueOf()).toBe('2019-01-14');
});

it('moveReducer step forward on forward', () => {
  const reducer = moveReducer(new StringyDate('2019-01-15'), { type: 'forward', scale: 3 });
  expect(reducer.valueOf()).toBe('2019-01-16');
});
