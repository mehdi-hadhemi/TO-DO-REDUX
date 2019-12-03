import React, { Component } from "react";
import { addTodo , deleteTodo,completeTodo,ediTodo} from "./actions/actions";
import { connect } from "react-redux";
import uuid from 'uuid'
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "",id:uuid(), completed: false,edit: false };
  }

  handelInputChange = e => {
    this.setState({ text: e.target.value});
  };
  getInput= x =>{
this.setState({text:x.text, edit: !this.state.edit, id: x.id})
  }
  editAndChange = () => {
    this.props.edit(this.state)
    this.setState({edit: false,text:''})

  }
  render() {
    return (
      <div>
        <div class="bluebox">
          <h1>TO-DO APP!</h1>
          <h6>Add new To-Do</h6>
          <input
            type="text"
            id="texto"
            placeholder="Enter new task"
            value={this.state.text}
            onChange={this.handelInputChange}
          />
          <br />
          <button onClick={() => {this.state.edit ? this.editAndChange() : this.props.add({...this.state, id: uuid()})}
              } id="add">
            {this.state.edit?'edit':'Add'}
          </button>
        </div>
        <div class="let">
          <h1 class="titre">Let's get some work done!</h1>
        </div>

        {this.props.todos.map(el =><div>
            <p className={el.completed ? 'through' : undefined}>{el.text}</p>
             <button  onClick={() => this.props.complete(el.id)}>{el.completed? 'undo': 'complete'} </button>
             <button onClick={() => this.props.delete(el.id)} >delete</button>
             <button onClick={() => this.getInput(el)} >edit</button>
             </div>)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        add: x => dispatch(addTodo(x)),
    delete: y => dispatch(deleteTodo(y)),
    complete: z=>dispatch(completeTodo(z)),
    edit: w=>dispatch(ediTodo(w))
  };
};
const mapStateToProps = state => {
    return{
      todos: state.TodoReducer,
    }
  }

export default connect(mapStateToProps , mapDispatchToProps)(Todo);
