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
      <DataFetchingDetail/>
    </div>
  );
}

export default App;
