import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import {addmovie,editmovie} from './actions/action'
import uuid from 'uuid'

class AddModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        id: this.props.movie && this.props.movie.id,
        title: this.props.movie? this.props.movie.title : '',
        year: this.props.movie? this.props.movie.year : '',
        rating: this.props.movie? this.props.movie.rating : 1,
        image: this.props.movie? this.props.movie.image : ''
      };
    }
    handleShow = () => {
      this.setState({ show: !this.state.show });
    };
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    addMovie = newMovie => {
      this.props.add(newMovie);
      this.setState({ show: false });
    };
    editMovie = updatedMovie => {
      this.props.edit(updatedMovie)
      this.setState({ show: false });
    }
    render() {
      return (
        <div>
          <Button variant="primary" onClick={this.handleShow}>
            {this.props.mode ? 'Edit Movie' : 'Add New Movie'}
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleShow}>
            <Modal.Header closeButton>
            {this.props.mode ? 'Edit Movie' : 'Add New Movie'}
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div>
                  <label>Title:</label>
                  <input type="text" value={this.state.title} onChange={this.handleChange} name="title" />
                </div>
                <div>
                  <label>Image:</label>
                  <input type="text" onChange={this.handleChange} value={this.state.image} name="image" />
                </div>
                <div>
                  <label>Rating:</label>
                  <input type="text" onChange={this.handleChange} name="rating" value={this.state.rating}/>
                </div>
                <div>
                  <label>Year:</label>
                  <input type="text" onChange={this.handleChange} name="year" value={this.state.year}/>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button variant="success" 
                onClick={() => {
                  this.props.mode ? this.editMovie(this.state) : this.addMovie({...this.state, id:uuid()})
                }
              } id="add">
                {this.props.mode ? 'Edit' : 'ADD'}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  const mapDispatchToProps= dispatch=>{
    return {
        add:x=>dispatch(addmovie(x)),
        edit:z=>dispatch(editmovie(z)),
    }}
  
  export default connect(null,mapDispatchToProps)(AddModal);
  