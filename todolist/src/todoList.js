import React from "react";

class TodoList extends React.Component {
  doneTask = (e) => {
    this.props.doneTask(e.target.parentNode.id);
  };

  removeTask = (e) => {
    this.props.removeTask(e.target.parentNode.id);
  };

  filterTasks = (param) => {
    this.props.filterTasks(param);
  };

  render() {
    let items_left = this.props.myTasks.filter(task => task.status==="passive").length;
    const items = this.props.myTasks.map((elem, i) => {
      return (
        <li key={i} id={"task_"+i} className={elem.status}>
          <span className="id">{i + 1}</span>
          <span className="title">{elem.text}</span>
          <span className="type" onClick={this.doneTask} />
          <span className="delete" onClick={this.removeTask} />
        </li>
      );
    });
    return (
      <div>
        <div className="todo-list">
          <ul>
            {items}
          </ul>
        </div>
        <div className="todo-filter">
          <div className="left">
            <span>{items_left} items left</span>
          </div>
          <div className="right">
            <ul>
              <li><span onClick={() => this.filterTasks("all")} className="active">All</span></li>
              <li><span onClick={() => this.filterTasks("active")}>Active</span></li>
              <li><span onClick={() => this.filterTasks("passive")}>Completed</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;