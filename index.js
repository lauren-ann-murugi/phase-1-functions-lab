// return a distance that is equal to one
const block = 43
function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(block - hq);
}

//return the value in feet that is equal to 264
function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(43);
    const hq = 42;
    return Math.abs(feet -hq) * 264;
}

// return the distance in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs (destination - start) * 264;
}

//return the fare price
function calculatesFarePrice(start, destination) {
const distanceInFeet = Math.abs(destination - start) * 264;

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}




