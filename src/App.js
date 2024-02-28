import './App.css';
import {React, useState} from 'react';


const cardImages = [
  {"src": "/img/helmet.jpg" },
  {"src": "/img/potion.jpg" },
  {"src": "/img/ring.jpg" },
  {"src": "/img/scroll.jpg" },
  {"src": "/img/shield.jpg" },
  {"src": "/img/sword.jpg" }, 
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
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.jpg" alt="card back" />
            </div>
          </div>
        ))}
       </div>

    </div>
  );
}

export default App