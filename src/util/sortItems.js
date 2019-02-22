// places a single event in the best row
const placeItem = (event, lanes, lanePointer = 0) => {
  if (lanePointer >= lanes.length) return [...lanes, [event]];
  const lane = lanes[lanePointer];
  if (event.start > lane[lane.length-1].end){
    // stick on the end of current lane
    lanes[lanePointer] = [...lane, event];
  } else if (event.end < lane[0].start) {
    // stick on the front of current lane
    lanes[lanePointer] = [event, ...lane];
  } else {
    // try again on the next lane
    lanes = placeItem(event, lanes, lanePointer + 1);
  }
  return lanes;
}

// sorts items into a well-packed 2d array
const sortItems = (ary) => {
  if (!Array.isArray(ary) || !ary.length) return [];

  let clone = [...ary];
  console.time('sort')
  let lanes = [];

  // .sort() is nonstable in some environments, so this isn't perfect
  // in a typical case, I might use _.sortBy() from Lodash
  // but I'm trying to minimize external libraries
  // and I'd also possibly want to consider performance.

  // Sorting the long events to the front tends to pack things
  // in a little tighter and can result in slightly fewer lanes
  // at the cost of a few milliseconds. Could be removed for
  // a slight performance bump with big data sets
  clone.sort((a,b) => {
    const spanA = Date.parse(a.end) - Date.parse(a.start);
    const spanB = Date.parse(b.end) - Date.parse(b.start);
    return spanA < spanB ? 1 : -1;
  });
  clone.forEach((event, i) => { lanes = placeItem(event, lanes) });
  console.timeEnd('sort')
  return lanes;
}

export default sortItems;
