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
}