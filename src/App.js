import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// importing components js file
import Header from './components/layout/header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import { v4 as uuidv4 } from 'uuid'
import './App.css';

import axios from 'axios'


class App extends Component{
   
  //script
   state = {
      todos: [
        // { id:uuidv4(), title: 'Study ReactJs', completed: false },
        // { id:uuidv4(), title: 'Watching Vlogs', completed: false },
        // { id:uuidv4(), title: 'Designing Template', completed: false }
      ]
   }

   componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>{
       this.setState({
         todos: res.data
       }) 
     }).catch(err=>{ console.log(err)})
   }

   // Methods
   markCompleted = ( id ) => {
    this.setState({
      todos: this.state.todos.map( todo => {
          if(todo.id === id ) {
            todo.completed = !todo.completed
          }
          console.log('line25',todo)
          return todo;
         
      })
    })
   }
  

   delTodo = (id) => {
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then( () =>{
        this.setState({
          todos: [...this.state.todos.filter(rec=>{
            return rec.id !== id 
          })]
        })
     })
    //  this.setState({
    //    todos: [...this.state.todos.filter(todo=> {
    //       return todo.id !== id
    //    })]
    //  })
   }

   AddTodo = ( title ) => {
     axios.post('https://jsonplaceholder.typicode.com/todos', {
       title,
       completed: false
     }).then(res=>{
         this.setState({
           todos: [...this.state.todos, res.data ]
         })
      //  this.setState({
      //    todos:[...this.state.todos, res.data ]
      //  })
     })
    //  const newTodo = {
    //     // id: uuidv4(),
    //     title: title,
    //     completed: false
    //  };

    //  console.log('line51', newTodo)

    //  this.setState({ 
    //    todos: [...this.state.todos, newTodo ]
    //  })
   }

  // Template
   render(){ 
     console.log( 'line22', this.state.todos )
     return(
       <Router>
       <div className="App">
         <Header/>
         <Route path="/TodoListApp" exact render={ props => (
           <React.Fragment> 
             <div className="container">
              <AddTodo AddTodo={this.AddTodo}/>
              <Todos todos={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo}/>
             </div>
           </React.Fragment>

         )}> 
         </Route>
         <Route path="/about" component={About}>

         </Route>
       </div>
       </Router>
     )
   }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
