import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Desc extends Component {
     constructor(props){
         super(props)
         this.state={
            movies : {}
         }
     }
     componentDidMount() {
         this.setState({
             movies : this.props.movies.filter(el=>el.id==this.props.match.params.id)[0]
         })
         
     }
     
    render() {
        return (
            <div className='desc'>
               <h1>{this.state.movies.title}</h1> 
                <img src={this.state.movies.image} alt=''/>
                <h2>{this.state.movies.year}</h2>
                <p>{this.state.movies.description}</p>
            </div>
        )
    }
}
const mapstatetoprops=state=>{
    return {movies:state.MovieReducer}
}

export default connect(mapstatetoprops)(Desc)