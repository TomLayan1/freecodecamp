// Declare four const variable
const forumLatest = 'https://forum-proxy.freecodecamp.rocks/latest';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const postsContainer = document.getElementById('posts-container');

// 
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;
  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

// A function to convert view counts to a more readable format.
// For example, if the view count is 1000, it should display as 1k
const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);

  // check if views is greater or equal to 1000
  if (views >= 1000) {
    return `${thousands}k`
  }

  return views
};

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
  postsContainer.innerHTML = topics.map((items) => {

  // Inside the map method, destructure the following properties from the item object.
  const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = items;

  return `
    <tr>
      <td>
        <p class="post-title">${title}</p>
      </td>
      <td></td>
      <td>
        ${posts_count - 1}
      </td>
      <td>
        ${viewCount(views)}
      </td>
      <td>
        ${timeAgo(bumped_at)}
      </td>
    </tr>`;
  }).join('');
}