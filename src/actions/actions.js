
import { ADD_Todo, Complete_Todo ,Delete_Todo, EdiTodo} from "./type";


export const addTodo = newTodo => {
    return {
        type: ADD_Todo,
        payload: newTodo
    }
}
export const deleteTodo = id => {
    return {
        type: Delete_Todo,
        payload: id 
    }
}
export const completeTodo = state => {
    return {
        type: Complete_Todo,
        payload: state
    }
}
export const ediTodo = state => {
    return {
        type:EdiTodo,
        payload: state
    }
}