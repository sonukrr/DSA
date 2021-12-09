// TC - O(n log n), SC - O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((n1, n2) => n1 - n2);
    blueShirtHeights.sort((n1, n2) => n1 - n2);
    var isStrictlyTaller = blueShirtHeights[0] != redShirtHeights[0] ? true: false;
    var isBlueGreater = blueShirtHeights[0] > redShirtHeights[0] ? true : false;
  
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (isBlueGreater) {
        if (blueShirtHeights[i] < redShirtHeights[i]) {
          isStrictlyTaller = false;
          break;
        }
      } else {
        if (redShirtHeights[i] < blueShirtHeights[i]) {
          isStrictlyTaller = false;
          break;
        }
      }
    }
  
    return isStrictlyTaller;
  }

var obj = {
    "blueShirtHeights": [6, 9, 2, 4, 5],
    "redShirtHeights": [5, 8, 1, 3, 4]
  };

  classPhotos(obj.redShirtHeights, obj.blueShirtHeights);
