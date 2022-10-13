import { useState } from 'react';
import './App.css';

const App = () =>{
  const[quotes, setQuotes] = useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      let random = Math.floor(Math.random() * data.length);
      setQuotes(data[random])
    })
  }

  return(
    <div className='App' id="quote-box">
      <h2 id="text">{quotes.text}</h2>
      <h6 id="author">{quotes.author}</h6>
      <button onClick={getQuotes} id="new-quote">New Quote</button>
      <ul><a href="twitter.com/intent/tweet" id="tweet-quote"> Tweet</a></ul>
      
    </div>
    
  )
}

export default App;
