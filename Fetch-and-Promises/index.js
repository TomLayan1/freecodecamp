// select the author container and load more button with the dom
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

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