import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [blog, setBlog] = useState(null);
  console.log(blog)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        setBlog(data);
      })
  }, [])

  return (
    <>
      <div className='main'>
        BLOG POSTS
        {blog.map(blog => (
          <div key={blog.id}>
            <p>{blog.title}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App