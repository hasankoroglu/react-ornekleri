import React, { Component } from 'react';
import TodoList from "./todoList";
import ToDoForm from "./todoForm";
import Header from "./inc/header";
import Footer from "./inc/footer";

class App extends Component {
  render() {
    const myTasks = [
      "Kitap Oku",
      "Film İzle",
      "CS:Go Oyna",
      "Erken Uyu"
    ];
    return (
      <div className="content">
        <Header />
        <ToDoForm />
        <TodoList myTasks={myTasks} />
        <Footer />
      </div>
    );
  }
}

export default App;
