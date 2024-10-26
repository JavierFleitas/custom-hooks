import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const useTodo = () => {


    const [todos, dispatch] = useReducer(todoReducer, [] , init)

    useEffect(() => {
     
        localStorage.setItem('todos', JSON.stringify( todos ))

    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add todo',
            payload: todo
        }

        dispatch(action)
    }

    const handledDeleteTodo = (id) => {

        // console.log({id})
        dispatch({
            type: 'todo remove',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {

        // console.log({id})
        dispatch({
            type: 'toggle todo',
            payload: id
        })
    }



    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleToggleTodo,
        handledDeleteTodo
    }
}
