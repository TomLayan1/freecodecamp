function whatIsInAName(collection, source) {
  let newArray = [];
  for (let i = 0; i < collection.length; i++) {
    let matching = false;
    
    for (const sourseProp in source) {
      if (collection[i][sourseProp] !== source[sourseProp]) {
        matching = true;
      }
    }
    if (!matching) {
      newArray.push(collection[i])
    }
  }
  return newArray
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));