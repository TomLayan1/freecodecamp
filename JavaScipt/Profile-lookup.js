const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// the function checks if the name parameter is the same as the firstName of each contact in the array
function lookUpProfile(name, prop) {
  for (let i = 0; i < name.length; i++){
    if (name === contacts[i].firstName){
      if(contacts[i].hasOwnProperty(prop)) {
        // if the name is the same as the first name, it will return the the likes of the contact with the first name
        return contacts[i][prop];
      }
      else {
        // if its not the first name, it iwll return the following message
        return "No such property";
      }
    }
  }
  // if there are no particular prop in the array, it will return the following message
  return "No such contact"
}

console.log(lookUpProfile("Akira", "likes"));