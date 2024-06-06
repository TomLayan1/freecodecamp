import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [blog, setBlog] = useState(null)

  useEffect(() => {}, [])
  return (
    <>
      <div className='main'>
        Blog Posts
      </div>
    </>
  )
}

export default App