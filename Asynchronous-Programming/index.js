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
    // log the data to the console
    console.log(data);
  } catch (err) {}
};
// call the fetchData function to log the data
fetchData();