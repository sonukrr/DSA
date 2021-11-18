// TC - O(n*(n+m)), SC - O(n)
function underscorifySubstring(string, substring) {
    // 1. getLocations
    // 2. collapseLocations
    // 3. underscorify
    var locations = collapseLocations(getLocations(string, substring));
    return underscorify(string, locations);
  }
  
  function getLocations(string, substring) {
    const locations = [];
    let startIdx = 0;
    while (startIdx < string.length) {
      const nextIdx = string.indexOf(substring, startIdx);
      if (nextIdx !== -1) {
        locations.push([nextIdx, nextIdx + substring.length]);
      //   console.log(locations);
        startIdx = nextIdx + 1;
      } else {
        break;
      }
    }
  
    return locations;
  }
  
  function collapseLocations(locations) {
    if (!locations.length) return locations;
  
    const collpasedLocations = [locations[0]];
    let prev = collpasedLocations[0];
    for (let i = 1; i < locations.length; i++) {
      const curr = locations[i];
      if (curr[0] <= prev[1]) {
        prev[1] = curr[1];
      } else {
          collpasedLocations.push(curr);
        prev = curr;
      }
    }
  
    return collpasedLocations;
  }
  
  function underscorify(string, locations) {
    let locationsIdx = 0;
    let stringIdx = 0;
    let inBetweenUnderscores = false;
    const finalchars = [];
    let i = 0;
    while (stringIdx < string.length && locationsIdx < locations.length) {
      if (stringIdx == locations[locationsIdx][i]) {
        finalchars.push("_");
        inBetweenUnderscores = !inBetweenUnderscores;
        if (!inBetweenUnderscores) locationsIdx++;
        i = i == 1 ? 0 : 1;
      }
      finalchars.push(string[stringIdx]);
      stringIdx++;
    }
    if (locationsIdx < locations.length) {
      finalchars.push("_");
    } else if (stringIdx < string.length) {
      finalchars.push(string.slice(stringIdx));
    }
  
    return finalchars.join("");
  }
  
  const mainStr = "testthis is a testtest to see if testestest it works";
  const subStr = "test";
  console.log(underscorifySubstring(mainStr, subStr));