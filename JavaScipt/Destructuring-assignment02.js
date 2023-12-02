function destructuringArray(a, b){
  [a, b] = [b, a];
  return [a, b];
}
console.log(destructuringArray(8, 6));