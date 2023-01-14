import React, { useContext } from 'react'
import { globalInfo } from '../App';

export default function Counter() {
    const {Count, update, decrease} = useContext(globalInfo);
    
  return (
    <div>
        <h1>
            Counter APP
        </h1>
        <h2>{Count}</h2>
        <button onClick={()=>update()} >Increase</button>
        <button onClick={()=>decrease()} >Decrease</button>
        

    </div>
  )
}
