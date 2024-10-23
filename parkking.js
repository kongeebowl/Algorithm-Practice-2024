/* let yesterdayParking = []
let todayParking = []

function parkingSpaces(N, x, y) {
    let 
}
 */

/*  1. Input # of parkingSpaces 
    2. Create two arrays, "Yesterday" "Today"
    3. Input occupied and empty spaces for yesterday with C and ., store in array named Yesterday 
    4. Input occupied and empty spaces for today with C and ., store in array named Today
    5. 
    */

function parkingSpaces(spaces, yes, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    if (yes[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}

console.log(parkingSpaces(5, "CC..C", "C...C"));
