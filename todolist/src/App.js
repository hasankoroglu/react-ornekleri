import React, { Component } from 'react';
import TodoList from "./todoList";
import ToDoForm from "./todoForm";
import Header from "./inc/header";
import Footer from "./inc/footer";

let arrMyTasks = [
  {text:"Kitap Oku",status:"passive"},
  {text:"Film İzle",status:"passive"},
  {text:"CS:Go Oyna",status:"passive"},
  {text:"Erken Uyu",status:"passive"}
]


class App extends Component {
  constructor(){
    super();
    this.state = {myTasks:arrMyTasks};
    console.log(true || (true && false));
  }

  addTask = (val) => {
    arrMyTasks.push({text:val,status:"passive"});
    this.setState({myTasks:arrMyTasks});
  }

  doneTask = (taskId) => {
    taskId = taskId.replace("task_","");
    let currStatus = arrMyTasks[taskId].status;
    let newStatus = (currStatus==="active") ? "passive" : "active";
    arrMyTasks[taskId].status = newStatus;
    this.setState({myTasks:arrMyTasks});
  }

  removeTask = (taskId) => {
    taskId = taskId.replace("task_","");
    arrMyTasks.splice(taskId,1);
    this.setState({myTasks:arrMyTasks});
  }

  filterTasks = (param) => {
    let newArrTasks = arrMyTasks.filter(task=>(task.status!==param||(task.status!==param&&task.status===param)));
    this.setState({myTasks:newArrTasks});
  }

  render() {
    return (
      <div className="content">
        <Header />
        <ToDoForm addTask={this.addTask}/>
        <TodoList myTasks={this.state.myTasks} 
                  doneTask={this.doneTask} 
                  removeTask={this.removeTask}
                  filterTasks={this.filterTasks} />
        <Footer />
      </div>
    );
  }
}

export default App;
