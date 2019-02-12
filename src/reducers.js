export const zoomReducer = (prevState, action) => {
  switch(action.type){
    case 'zoom_in':
      return Math.max(1, prevState - 1);
    case 'zoom_out':
      return Math.min(10, prevState + 1);
    default:
      return prevState;
  }
}

export const moveReducer = (prevState, action) => {
  const moveBy = Math.round(action.scale / 3);
  switch(action.type){
    case 'back':
      return prevState.setDaysBefore(moveBy);
    case 'forward':
      return prevState.setDaysAfter(moveBy);
    default:
      return prevState;
  }
}
