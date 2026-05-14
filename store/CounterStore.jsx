import { create } from 'zustand'

//create store
export const useCounterStore = create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state
    user:{name:"ravi",email:"pandu@mail.com",age:21},
    //function to change email
    changeEmail:()=>set({...user,email:"ashu@gmail.com"}),
    //function to change name and age
    changeNameandAge:()=>set ({...user,name:"bhanu",age:23}),
    //function to modify the state
    incrementCounter:()=>set(state =>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state =>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0})
}))