import React from "react";
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


export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {
  return (
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
      <userContext.Provider value={'neel'}>
        <channelContext.Provider value={'codevolution'}>
            <ComponentC/>
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
