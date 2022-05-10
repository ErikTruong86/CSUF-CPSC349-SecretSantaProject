
export function shuffle(names){
  for( let i = names.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [names[i], names[j]] = [names[j], names[i]]
  }
  return names;
}

// Shuffle the array of names from the database
// const shuffle = function(arr) {
//   for( let i = arr.length-1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i+1));
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//   }
//   return arr;
// }

// const drawNames = shuffle(names);

// Matches the the names of each person
// const matches = drawNames.map((name,index) => {
//   return {
//     santa: name,
//     receiver: drawNames[index + 1] || drawNames[0],
//   }
// });
