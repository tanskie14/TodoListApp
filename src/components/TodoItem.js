import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle  = () =>{   // Function CSS
        return {
            background: 'grey',
            color:'white',
            padding: '10px',
            borderBottom: '2px solid black',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }

    render() {
        // Deconstruct
        const { id, title }  = this.props.todo;
         
        return (
             // Inline Style stye={{ background: 'red'}}
            <div style={this.getStyle()} >
              {/* <p>{  this.props.todo.title } </p> */}
              <p> 
                <input type ="checkbox" onChange={this.props.markCompleted.bind(this, id )}></input> 
                { title }
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}> X </button>
              </p> 
            </div>
        )
    }
}

// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem
