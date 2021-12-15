// TC - O(br) | SC - O(br), b - blocks length, r - reqs length
function apartmentHunting(blocks, reqs) {
    // build min distances of reqs from each block obj
    const minDistanceForReqs = {};
  
    createMinDistanceForReq(blocks, reqs, minDistanceForReqs);
    let minDistanceForBlock = Infinity;
    let blockIdxWithMinDistance = -1;
    for (let i = 0; i < blocks.length; i++) {
        let maxDist = -Infinity;
        for (const req of reqs) {
            maxDist = Math.max(maxDist, minDistanceForReqs[req][i]);
        }

        if(maxDist < minDistanceForBlock){
            minDistanceForBlock = maxDist;
            blockIdxWithMinDistance = i;
        }
        
    }
    return blockIdxWithMinDistance;
  }
  
  // TC - O(br) | SC - O(br)
  function createMinDistanceForReq(blocks, reqs, minDistanceForReqs) {
    for (const req of reqs) {
      minDistanceForReqs[req] = new Array(blocks.length).fill(Infinity);
    }
  
    for (const req in minDistanceForReqs) {
      let currReq = minDistanceForReqs[req];
      // from left to right
      calculateMinDistanceFrom(currReq, req,  blocks, true);
      // from right to left
      calculateMinDistanceFrom(currReq, req, blocks, false);
    }
  }
  
  function calculateMinDistanceFrom(currReq, req, blocks, isLeft) {
    let lastSeenIdx = Infinity;
  
    for (let i = 0; i < blocks.length; i++) {
      let idx = i;
      if (!isLeft) idx = blocks.length - 1 - i;
      let currBlock = blocks[idx];
      if (currBlock[req]) {
        lastSeenIdx = idx;
      }
      currReq[idx] = Math.min(Math.abs(lastSeenIdx - idx), currReq[idx]);
    }
  }
  var obj = {
    blocks: [
      {
        gym: false,
        school: true,
        store: false,
      },
      {
        gym: true,
        school: false,
        store: false,
      },
      {
        gym: true,
        school: true,
        store: false,
      },
      {
        gym: false,
        school: true,
        store: false,
      },
      {
        gym: false,
        school: true,
        store: true,
      },
    ],
    reqs: ["gym", "school", "store"],
  };
  
  apartmentHunting(obj.blocks, obj.reqs);
  