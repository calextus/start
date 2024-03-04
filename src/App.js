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
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


// shuffle cards
const shufflecards = () => {
  const shuffledcards = [...cardImages, ...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({...card, id: Math.random() }))

     setCards(shufflecards) 
     setTurns(0)
}


  // handle a choice
  const handleChoice = (card) => {
    console.log(card)
  }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecards}>New Games</button>

       <div className="card-grid">
        {cards.map(card => ( 
          <SingleCard  
          key={card.id} 
          card={card} 
          handleChoice={handleChoice}
          />
        ))}
       </div>

    </div>
  );
}

export default App