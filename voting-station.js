//  jshint esversion:6
// Voting Station challenge with a capacity atleast 20
// Station Could be School or Community Centres

const _stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const output = ['Bright Lights Elementary', 'Moose Mountain Community Centre'];

const chooseStations = (stations) => {
  if(stations && stations.length) {
    // get the filtered stations 
    return stations
      .filter( station => {
        const [ stationName, capacity, type ] = station; // array destructuring
        if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
          return station;
        } 
      })
      .map( s => s[0]);
  }
};
  
console.log(chooseStations(_stations));




// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// function chooseStations(stations){
//   const goodStations = [];

//   for( const station of stations){
//     const capacity = station[1];
//     console.log(capacity);
//     if (capacity >= 20){
//       console.log(station[0]);

//       const type = station[2];
//       if(type === "school" || type ==="community center"){
//         goodStations.push(station[0]);
//       }
//     }
//   }
//   return goodStations;
// }
// console.log(chooseStations(stations));