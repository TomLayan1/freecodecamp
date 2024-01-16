function sentensify(str) {
  let newString = '';
  newString = str.split(/\W/);
  return newString.join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));