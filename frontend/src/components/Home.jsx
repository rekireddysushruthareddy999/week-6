import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './Test'
function Home() {

  const {counter,changeCounter}=useContext(counterContextObj)
  
//call useCounter hook to get state of Zustand store
  console.log("Home")
  return (
    <div className='text-center'>
      <h1 className='text-4xl'>Counter:{counter}</h1>
    <button onClick={changeCounter} className='bg-pink-700 p-3 mt-5 text-white'>Change</button>
    
    <Test/>
</div>
)
}

export default Home