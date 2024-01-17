function spinalCase(str) {
  let regex = /\s|_|(?=[A-Z])/;

  return str.split(regex).join("-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));