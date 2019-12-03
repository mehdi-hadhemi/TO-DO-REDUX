import { Add_movie,  Search_movie ,Remove_movie,Edit_movie} from "../actions/type";
import uuid from 'uuid'
let initialstate=[{
    image:"https://upload.wikimedia.org/wikipedia/en/f/f0/Lion_%282016_film%29.png",
    title:"LION",
    rating:3,
    year:2000,
    description:"A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia. 25 years later, he sets out to find his lost family. In 1986, Saroo was a five-year-old child in India of a poor but happy rural family.",
    id:uuid()
    
  },
  {
    image:"http://fr.web.img6.acsta.net/c_215_290/pictures/19/09/03/12/02/4765874.jpg",
    title:"JOKER",
    rating:4,
    year:2001,
    description:"Joker provides a possible origin story for the character; set in 1981, it follows Arthur Fleck, a failed stand-up comedian whose descent into insanity and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City.",
    id:uuid()
  },
  {
    image:"http://fr.web.img6.acsta.net/pictures/14/09/22/10/40/162066.jpg",
    title:"INTERSELLAR",
    rating:5,
    year:2002,
    description:"Interstellar is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
    id:uuid()
  }]
  const MovieReducer =(state=initialstate,action) => {
    switch (action.type){
      case Add_movie: 
        return state.concat(action.payload)
      case Search_movie:
        return initialstate.filter(el => el.title.toUpperCase().includes(action.payload.name.toUpperCase().trim())&& el.rating >= action.payload.rating)
      case Remove_movie:
            return state.filter(el => el.id !== action.payload)
      case Edit_movie:
             return state.map(el=> el.id===action.payload.id? action.payload : el)
     default:
                  return state
    }
}
export default MovieReducer