import React from 'react'
import './App.css';
import pic from './coctail.jpg'


function Home() {
  return (
    <div className="App">
     <h1>Cocktail it yourself</h1>
     <img className="homePic" src={pic} alt="homePic"></img>
    </div>
  );
}

export default Home;
