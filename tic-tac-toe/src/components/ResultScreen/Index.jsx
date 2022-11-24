import React from 'react'
import { CIRCLE, CROSS, EMPTY } from '../../Constants'
// import Circle from '../Circle/Index'
import "./Index.css"
const ResultScreen = ({winner,resetGame}) => {
  return (
    <div className='result__screen'>
    <h1 className='result__heading'>{winner===CIRCLE && "Circle is the winner"} 
     {winner===CROSS && "Cross is the winner"}
     {winner===EMPTY && "It's a tie Match"}
     
     </h1>
<button className='result__btn' onClick={()=>resetGame()}>Restart Game</button>
    </div> 
  )
}

export default ResultScreen