// TC - O(n log n), SC - O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    var speed = 0;
    redShirtSpeeds.sort((n1,n2)=> n1-n2);
    blueShirtSpeeds.sort((n1,n2)=> fastest? (n2-n1): (n1-n2));

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        speed+= Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);        
    }
    return speed;
  }