import { ADD_Todo, Complete_Todo ,Delete_Todo,EdiTodo} from "../actions/type";

let initialstate=[]



const TodoReducer =(state=initialstate,action) => {
    switch (action.type){
        case ADD_Todo:
            return state.concat(action.payload)

        case Delete_Todo:
            return state.filter(el => el.id !== action.payload)

        case Complete_Todo:
            return  state.map(el=> el.id=== action.payload? {...el, completed:!el.completed}:el)
        case  EdiTodo: 
                return state.map(el=> el.id===action.payload.id? action.payload : el)
        default:
                return state
    }
}

export default TodoReducer