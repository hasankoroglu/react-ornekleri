import React, { Component } from 'react';
import TodoList from "./todoList";
import ToDoForm from "./todoForm";
import Header from "./inc/header";
import Footer from "./inc/footer";

const myTasks = [
  "Kitap Oku",
  "Film İzle",
  "CS:Go Oyna",
  "Erken Uyu"
];

class App extends Component {
  addTask(val){
    myTasks.push(val);
    console.log(myTasks);
  }
  render() {
    return (
      <div className="content">
        <Header />
        <ToDoForm addTask={this.addTask}/>
        <TodoList myTasks={myTasks} />
        <Footer />
      </div>
    );
  }
}

export default App;
