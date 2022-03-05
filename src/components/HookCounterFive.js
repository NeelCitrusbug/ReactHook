import React,{useState, useEffect} from 'react';

export default function HookCounterFive(){

    const[count,setCount] = useState(0)

    useEffect(()=>{
        document.title = `Clicked ${count} times`
    })

    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Click {count}</button>
        </div>
    )
}

