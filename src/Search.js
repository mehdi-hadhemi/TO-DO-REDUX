import React,{Component} from 'react'
import { searchmovie } from './actions/action'
import {connect} from 'react-redux'
import StarRatingComponent from "react-star-rating-component";


 class  Search extends Component{
     constructor(props){
     super(props)
         this.state={
             name:"",
             rating:null
         }
     }
     onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue},() =>this.props.search({...this.state, rating: this.state.rating}));
        

      }
     
     render(){
    return (
        <div>
            <input type='text' onChange={(value)=>{this.setState({name:value.target.value}, () =>  this.props.search({...this.state, name:this.state.name}))} } value={this.state.name} placeholder='search your movie' />
            <StarRatingComponent 
                className="stars"
                name="rate1"
                 starCount={5}
                   value={this.state.rating}
                   onStarClick={this.onStarClick.bind(this)}
                    />
        </div>
    )
}}
const mapDispatchToProps= dispatch=>{

    return {
        search:y=>dispatch(searchmovie(y)),

      
    }
}
export default connect(null,mapDispatchToProps)(Search);
