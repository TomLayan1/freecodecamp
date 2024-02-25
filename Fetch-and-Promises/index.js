// select the author container and load more button with the dom
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// use the fetch method and pass a server url in it to get data from the server
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")

// use the .then() method to get a response
// to make the data usable, you can use the .json() method on the response object to parse it into JSON
.then((res) => res.json())
// chaining another .then() method for the callback function
.then((data) => {
  console.log(data)
})
// using the .catch() method to handle errors
.catch((err) => {
console.error(`There was an error: ${err}`);
})

// Pass an empty callback function to the .forEach() method.
// For the first parameter of the callback, destructure the author, image, url, and bio items.

// For the second parameter, pass in index.
// This will represent the position of each author, and will be useful for pagination later.
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index)=> {

    //use the compound assignment operator (+=) to append an empty template literal to the innerHTML of authorContainer.
    authorContainer.innerHTML += `
      <div id="${index}" class="user-card"></div>
    `;
  });
}