import React from 'react'
import { CIRCLE, CROSS, EMPTY } from '../../Constants'
import "./Index.css"
import Circle from "../Circle/Index"
import Cross from "../Cross/Index"
const Square = ({position,value, handleMove}) => {
const handleClick=()=>{
  if(value===EMPTY){

    handleMove(position)
  }
}

  return (
    <div className='square' onClick={handleClick}>
    {value===CIRCLE && <Circle/>}
    {value===CROSS && <Cross/>}
    </div>
  )
}

export default Square