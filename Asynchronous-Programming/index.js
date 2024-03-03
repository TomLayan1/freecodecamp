// Declare four const variable
const forumLatest = 'https://forum-proxy.freecodecamp.rocks/latest';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const postsContainer = document.getElementById('posts-container');

// To populate the forum leaderboard with data, you will need to request the data from an API
const fetchData = async () => { 
  try{
    // Use the await keyword to handle the asynchronous nature of the fetch() method
    const res = await fetch(forumLatest);
    const data = await res.json()

    // Call the showLatestPosts() function in the try block to see your changes.
    showLatestPosts(data);
  } catch (err) {}
};
// call the fetchData function to log the data
fetchData();

// To dislay the data, we start by creating an arrow function which takes in a data parameter
const showLatestPosts = (data) => {
  // use destructuring to get the topic_list and users properties from the data object.
  const { topic_list, users } = data;

  // Destructure the topics array from the topic_list object.
  const { topics } = topic_list;

  // Call the map() method on your topics array. For the callback function, use an empty arrow function that takes item as a parameter.
  // Then assign the result of the map() method to postsContainer.innerHTML.

  postsContainer.innerHTML = topics.map((items) => {});

  // Inside the map method, destructure the following properties from the item object.
  const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = items;
}