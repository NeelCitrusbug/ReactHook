import React,{useState} from 'react';

function HookCounterTwo(){
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    const IncrementFive = () => {
        for (let i = 0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <div>
            Count: {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increase count</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrease count</button>
            <button onClick={IncrementFive}>Increase 5</button>
        </div>
    )
}

export default HookCounterTwo
