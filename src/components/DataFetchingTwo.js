import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'Data_success':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'Data_error':
            return {
                loading:false,
                post:{},
                error:'Something went wrong'
            }

        default:
            return state
}
}




function DataFetchingTwo() {

    const [state,dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    dispatch({type:'Data_success',payload:response.data})
                })
                .catch(error =>{
                    dispatch({type:'Data_error'})
                })
    },[])

  return (
    <div>
        {state.loading?'Loading':state.post.title}
        {state.error?state.error:null}
    </div>
  )
}

export default DataFetchingTwo
