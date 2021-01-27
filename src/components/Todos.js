/* eslint-disable react/require-render-return */
import React, { Component } from 'react';
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types';

class Todos extends Component{
   render(){
        // console.log(this.props.todos)
       //   return this.props.todos.map(todo => 
      //       <h1 key={todo.id}> { todo.title } </h1>
     //   )
    return this.props.todos.map( todo =>  
         <TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted} delTodo={this.props.delTodo}/>
    )
    //<TodoItem/>
   }
   
}

// Prop Types ( Property Types ) 
Todos.propTypes = {
   todos: PropTypes.array.isRequired  // Required
}

export default Todos;
