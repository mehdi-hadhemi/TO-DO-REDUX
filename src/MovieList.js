import React, { Component } from 'react'
import {connect} from 'react-redux'
import { removemovie } from './actions/action'
import AddModal from './Addmodal'
import StarRatingComponent from "react-star-rating-component";
import {Link} from 'react-router-dom'


 class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
      }
    render() {
        return (
            <div  >
              <div>
                <AddModal mode={false} />
                </div>
                <div  className='onemovie' style={{display: 'flex'}}>
              {this.props.movies.map(el=><div >
                  <img className='image' src={el.image} alt=''/>
                  <p>{el.title}</p>
                  <p>{el.year}</p>
                  <Link to={`/${el.id}`}>description</Link>
                  <StarRatingComponent
                className="stars"
                name="rate1"
                 starCount={5}
                   value={el.rating}
                    />
                    <AddModal movie={el} mode={true}/>
  

                  <button onClick={() => this.props.remove(el.id)}>remove</button>
                  </div>)
              }
              </div>
            </div>
        )
    }
}
const mapDispatchToProps= dispatch=>{

return {
  
    remove:w=>dispatch(removemovie(w)),
}

}
const mapstatetoprops=state=>
{
    return {movies:state.MovieReducer}
}

export default connect(mapstatetoprops,mapDispatchToProps)(MovieList)