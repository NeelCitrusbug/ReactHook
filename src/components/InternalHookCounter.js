import React,{useState,useEffect} from 'react';

export default function InternalHookCounter(){

    const[count,setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        console.log("useeffect called")
        const interval = setInterval(tick,1000)

        return () =>{
            clearInterval(interval)
        }
    },[])

    return(
        <div>
            {count}
        </div>
    )
}