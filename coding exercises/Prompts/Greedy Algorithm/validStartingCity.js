// TC - O(n^2), SC - O(1)
function validStartingCity(distances, fuel, mpg) {
    var validStartingCityIdx = -1;
    var gallons = fuel;
    for (let i = 0; i < gallons.length; i++) {
        gallons[i] = gallons[i] * mpg;
    }

    var currentFuel = 0;
    for (let i = 0; i < gallons.length; i++) {
        validStartingCityIdx = i;
        currentFuel = 0;
        for (let j = i; j < i + gallons.length; j++) {
            let correctIdx = j % gallons.length;
            currentFuel = currentFuel + gallons[correctIdx] - distances[correctIdx];
            if (currentFuel < 0) {
                validStartingCityIdx = -1;
                break;
            }
        }

        if (validStartingCityIdx != -1) {
            break;
        }
    }
    return validStartingCityIdx;
}

// TC - O(n), SC - O(1)
function validStartingCity(distances, fuel, mpg) {
   const numberOfCities = distances.length;
   let milesRemaining = 0;

   let startingCityIdx = 0;
   let milesRemainingAtStartingCity = 0;

   for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
       const distanceFromPrevCity = distances[cityIdx-1];
       const fuelFromPrevCity = fuel[cityIdx-1];

       milesRemaining += fuelFromPrevCity * mpg - distanceFromPrevCity;

       if(milesRemaining < milesRemainingAtStartingCity){
           milesRemainingAtStartingCity = milesRemaining;
           startingCityIdx = cityIdx;
       }
       
   }
   return startingCityIdx;
}

var obj = {
    "distances": [5, 25, 15, 10, 15],
    "fuel": [1, 2, 1, 0, 3],
    "mpg": 10
};

validStartingCity(obj.distances, obj.fuel, obj.mpg);

