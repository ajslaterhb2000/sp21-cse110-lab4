
let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};
for (const a in statistics) {
  if(a.charAt(0) == 'r' || statistics[a] % 2 == 1) {
    console.log(statistics[a]);
  }
}