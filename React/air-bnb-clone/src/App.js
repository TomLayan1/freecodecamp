import React from 'react';
import Navbar from './Components/Header';
import Body from './Components/Body';
import Card from './Components/Card'
import data from './data';

const App = () => {
  // Create a variable to create a new array of what the map object returns
  // map the imported data to create instances of each item so the can be used in JSX
  const card = data.map((item) => {
    return (
      <Card
        // Always have a key to pass a unique thing about the item which in this case is the id. Therefore key: {item.id}
        key = {item.id}

        // img = {item.coverImg}
        // openSpot = {item.openSpots}
        // rating= {item.stats.rating}
        // reviewCount = {item.stats.reviewCount}
        // country = {item.country}
        // title = {item.title}
        // price = {item.price}
        // location = {item.location}

        // Destructure the data item to be more simplified
        item = {item}
      />
    )

  })
  return (
    <div className="App">
      <Navbar />
      <Body />
      <section className='card-section'>
        {/* Call the variable in this instance {card} */}
        { card }
      </section>
    </div>
  )
}

export default App;