import React, {useState, useCallback } from "react";
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(25000)

    const incrementage = useCallback(() =>{
        setAge(age+1)
    },[age]) 

    const incrementsalary = useCallback(() =>{
        setSalary(salary+1000)
    },[salary]) 

  return (
    <div>
      <Title/>
      <Count text="age" count={age}/>
      <Button eventhandler={incrementage}>Increment Age</Button>
      <Count text="salary" count={salary}/>
      <Button eventhandler={incrementsalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
