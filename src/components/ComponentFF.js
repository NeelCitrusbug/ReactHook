import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentFF() {
    const countContext = useContext(CountContext)
  return (
    <div>
        Component F
        <button onClick={()=> countContext.CountDispatch("increment")}>Increment</button>       
        <button onClick={()=> countContext.CountDispatch('decrement')}>Decrement</button>  
        <button onClick={()=> countContext.CountDispatch('reset')}>Reset</button>     
    </div>
  )
}

export default ComponentFF
