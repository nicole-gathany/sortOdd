function sortArray(array) {

  let odds = array.filter(n => n%2).sort((a,b) => b-a);
  console.log(odds);
  return array.map(n => n%2? odds.pop(): n)
}

sortArray([ -26, -11, 40,   1, -4,  1,  38, -11, -29, 8, -42, -28,  17, -11,-43,-8,-1, 42,-25, 43, -46, -34, 4, 26 ] )