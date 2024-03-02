import './App.css';
import {React, useState} from 'react';
import SingleCard from './SingleCard';


const cardImages = [
  {"src": "helmet.jpg" },
  {"src": "potion.jpg" },
  {"src": "ring.jpg" },
  {"src": "scroll.jpg" },
  {"src": "shield.jpg" },
  {"src": "sword.jpg" }, 
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

// shuffle cards
const shufflecards = () => {
  const shuffledcards = [...cardImages, ...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({...card, id: Math.random() }))

     setCards(shufflecards) 
     setTurns(0)
}


  console.log(cards, turns)


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecards}>New Games</button>

       <div className="card-grid">
        {cards.map(card => ( 
          <SingleCard  key={card.id} card={card} />
        ))}
       </div>

    </div>
  );
}

export default App