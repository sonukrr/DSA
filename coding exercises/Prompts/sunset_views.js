// TC - O(n), SC - O(n)
function sunsetViews(buildings, direction) {
  const buildingWithSunsetViews = [];

  const startIdx = direction == "WEST" ? 0 : buildings.length - 1;
  const step = direction == "WEST" ? 1 : -1;

  let idx = startIdx;
  let runningMaxHeight = 0;

  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];
    if (buildingHeight > runningMaxHeight) buildingWithSunsetViews.push(idx);

    runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);

    idx = idx + step;
  }

  if (direction == "EAST") buildingWithSunsetViews.reverse();

  return buildingWithSunsetViews;
}

// TC - O(n), SC - O(n)
function sunsetViews(buildings, direction) {
  const candidateBuildings = [];

  const startIdx = direction == "EAST" ? 0 : buildings.length - 1;
  const step = direction == "EAST" ? 1 : -1;

  let idx = startIdx;
  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];

    while (
      candidateBuildings.length > 0 &&
      buildings[candidateBuildings[candidateBuildings.length - 1]] <=
        buildingHeight
    ) {
      candidateBuildings.pop();
    }
    candidateBuildings.push(idx);
    idx = idx + step;
  }

  if (direction == "WEST") candidateBuildings.reverse();

  return candidateBuildings;
}

var buildings = [3, 5, 4, 4, 3, 1, 3, 2];
console.log(sunsetViews(buildings, "EAST"));
