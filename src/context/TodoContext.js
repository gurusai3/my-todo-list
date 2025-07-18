import {createContext,useContext} from 'react'

export const TodoContext=createContext({
    todos:[
        // this is the default one you can iclude it for referrence or you can remove it
        // {
        //     id: 1,
        //     todo: "Todo Msg",
        //     completed : false
        // }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo=()=>{return useContext(TodoContext)}

export const TodoProvider=TodoContext.Provider