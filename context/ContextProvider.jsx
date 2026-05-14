import { useState } from "react";
import { createContext } from "react"
export const counterContextObj=createContext();

function ContextProvider({children}) {

    //state
    const [counter,setCounter]=useState(10);
    //functions to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }

  return (
    <counterContextObj.Provider value={{counter,changeCounter}}>
        {
            children
        }
    </counterContextObj.Provider>
  )
}

export default ContextProvider