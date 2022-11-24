import { useState, useEffect } from "react"
import './App.css';
import Particle from './components/Particle';
import Square from './components/Square/Index';
import { CIRCLE, CROSS, EMPTY } from "./Constants";
import ResultScreen from "./components/ResultScreen/Index"
function App() {
  const [player, setPlayer] = useState(CIRCLE)
  const [positions, setPositions] = useState([
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ])

const [winner,setWinner]= useState(null)

const handleMove=(position)=>{
    const updatedPositions=[...positions];
    updatedPositions[position]=player;
    setPositions(updatedPositions)
    setPlayer(prevPlayer=>prevPlayer===CIRCLE ?CROSS:CIRCLE)
}

const resetGame =()=>{
  setPositions([
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ])
  setPlayer(CIRCLE)
  setWinner(null)
}


useEffect(()=>{
 setWinner(decision()) 
})

const checkPositions=(pos1,pos2,pos3,playerType)=>{
  if(positions[pos1]===playerType && positions[pos2]===playerType && positions[pos3]===playerType ){
    return true
  }
  return false
}

const decision=()=>{
  if(checkPositions(0,1,2,CIRCLE)) return CIRCLE
  if(checkPositions(3,4,5,CIRCLE)) return CIRCLE
  if(checkPositions(6,7,8,CIRCLE)) return CIRCLE
  if(checkPositions(0,3,6,CIRCLE)) return CIRCLE
  if(checkPositions(1,4,7,CIRCLE)) return CIRCLE
  if(checkPositions(2,5,8,CIRCLE)) return CIRCLE
  if(checkPositions(0,4,8,CIRCLE)) return CIRCLE
  if(checkPositions(2,4,6,CIRCLE)) return CIRCLE





  if(checkPositions(0,1,2,CROSS)) return CROSS
  if(checkPositions(3,4,5,CROSS)) return CROSS
  if(checkPositions(6,7,8,CROSS)) return CROSS
  if(checkPositions(0,3,6,CROSS)) return CROSS
  if(checkPositions(1,4,7,CROSS)) return CROSS
  if(checkPositions(2,5,8,CROSS)) return CROSS
  if(checkPositions(0,4,8,CROSS)) return CROSS
  if(checkPositions(2,4,6,CROSS)) return CROSS


if(positions.every(pst=>pst!==EMPTY)) return EMPTY

return null

}

  return (
    <div className='App'>
      <Particle />
      <h1 className="app__heading">Tic Tac Toe</h1>
      {winner ? <ResultScreen winner={winner} resetGame={resetGame}/>:
      
      <div className='game__section'>
        {positions.map((pst,index)=>(
          <Square key={index*456464} position={index} value={pst} handleMove={handleMove} />

        ))}
       
      </div>
      
      }
    </div>
  );
}

export default App;
