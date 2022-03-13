import React,{useReducer} from "react";
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookCounterFive from './components/HookCounterFive'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import InternalHookCounter from './components/InternalHookCounter'
import DataFetching from './components/DataFetching'
import DataFetchingDetail from './components/DataFetchingDetail'
import ComponentC from './components/ComponentC'
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ComponentAA from "./components/ComponentAA";
import ComponentBB from "./components/ComponentBB";
import ComponentCC from "./components/ComponentCC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ParentComponent from "./components/ParentComponent";


export const userContext = React.createContext()
export const channelContext = React.createContext()

export const CountContext = React.createContext()
const initialState = 0

const reducer = (state,action) => {
    switch(action){
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}


function App() {
  const [count,dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value = {{CountState:count, CountDispatch:dispatch}}>
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterFive/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <InternalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingDetail/> */}

      {/* <userContext.Provider value={'neel'}>
        <channelContext.Provider value={'codevolution'}>
            <ComponentC/>
        </channelContext.Provider>
      </userContext.Provider> */}

      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}


      {/* Count - {count}
      <ComponentAA/> 
      <ComponentBB/>
      <ComponentCC/>
      */}

      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}

      <ParentComponent/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
