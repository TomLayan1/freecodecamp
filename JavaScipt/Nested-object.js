const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// assinging the value of the glove box property to the gloveBoxContents
const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);