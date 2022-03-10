import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentAA() {
    const countContext = useContext(CountContext)
  return (
    <div>
        Component A
        <button onClick={()=> countContext.CountDispatch("increment")}>Increment</button>       
        <button onClick={()=> countContext.CountDispatch('decrement')}>Decrement</button>  
        <button onClick={()=> countContext.CountDispatch('reset')}>Reset</button>     
    </div>
  )
}

export default ComponentAA
