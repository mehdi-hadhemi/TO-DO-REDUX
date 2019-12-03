import {Add_movie, Search_movie ,Remove_movie, Edit_movie} from "./type";


export const addmovie = newmovie => {
    return {
        type: Add_movie,
        payload:newmovie
    }
}
export const searchmovie = id => {
    return {
        type: Search_movie,
        payload: id 
    }
}
export const removemovie = state => {
    return {
        type:  Remove_movie,
        payload: state
    }
}
export const editmovie = movieToUpdate => {
    return {
        type:Edit_movie,
        payload: movieToUpdate
    }
}