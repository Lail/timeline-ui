// places a single event in the best row
const placeItem = (event, lanes, lanePointer = 0) => {
  if (lanePointer >= lanes.length) return [...lanes, [event]];
  const lane = lanes[lanePointer];
  if (event.start > lane[lane.length-1].end){
    lanes[lanePointer] = [...lanes[lanePointer], event];
  } else {
    lanes = placeItem(event, lanes, lanePointer + 1);
  }
  return lanes;
}

// sorts items into a well-packed 2d array
const sortItems = (data) => {
  if (!Array.isArray(data) && !data.length) return [];
  let lanes = [];
  // .sort() is nondeterministic, so this isn't perfect
  // in a typical case, I might use _.sortBy() from Lodash
  // but I'm trying to minimize external libraries
  // and I'd also possibly want to consider performance
  data.sort((a,b) => a.start > b.start ? 1 : -1);
  data.forEach((event, i) => { lanes = placeItem(event, lanes) });
  return lanes;
}

export default sortItems;
