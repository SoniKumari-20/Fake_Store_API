import { createContext, useState } from 'react';
import './App.css';
import Counter from './Component/Counter';
export const globalInfo = createContext();

function App() {
  const [count, setCount] = useState(0);
  function update(){
    setCount(count+1)
    
  }

  function decrease(){
    setCount(count-1)
  }
  return (
    <globalInfo.Provider  value={{Count: count , update:update, decrease:decrease}} >
    <div className="App">
      <Counter />
    </div>
    </globalInfo.Provider>
  );
}

export default App;
